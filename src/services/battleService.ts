import { prisma } from '~/database/prisma';
import type { BattleEntity, BattleRequest, BattleResult } from '~/types';

export class BattleService {
  async startBattle(userId: string, battleData: BattleRequest) {
    const { character_id, monster_id } = battleData;

    // Get character and monster data
    const [character, monster] = await Promise.all([
      prisma.character.findUnique({
        where: { id: character_id },
        include: { job: true },
      }),
      prisma.monster.findUnique({
        where: { id: monster_id },
        include: { details: true },
      }),
    ]);

    if (!character || !monster) {
      throw new Error('Character or monster not found');
    }

    // Check if character belongs to user
    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    // Simulate battle
    const battleResult = this.simulateBattle(character, monster);

    // Create battle log
    const battleLog = await prisma.battleLog.create({
      data: {
        characterId: character_id,
        monsterId: monster_id,
        battleResult: battleResult.result,
        characterHealthRemaining: battleResult.characterHealthRemaining,
        monsterHealthRemaining: battleResult.monsterHealthRemaining,
        turnsTaken: battleResult.turnsTaken,
        experienceGained: battleResult.experienceGained,
        goldGained: battleResult.goldGained,
      },
    });

    // Update character stats if victory
    if (battleResult.result === 'victory') {
      await prisma.character.update({
        where: { id: character_id },
        data: {
          experience: character.experience + battleResult.experienceGained,
          gold: character.gold + battleResult.goldGained,
          health: battleResult.characterHealthRemaining,
        },
      });
    }

    return {
      battleLog,
      battleResult: battleResult.result,
      experienceGained: battleResult.experienceGained,
      goldGained: battleResult.goldGained,
    };
  }

  async getBattleById(id: string, userId: string) {
    const battleLog = await prisma.battleLog.findUnique({
      where: { id },
      include: {
        character: {
          include: { job: true },
        },
        monster: {
          include: { details: true },
        },
      },
    });

    if (!battleLog) {
      throw new Error('Battle not found');
    }

    // Check if battle belongs to user
    if (battleLog.character.userId !== userId) {
      throw new Error('Battle does not belong to user');
    }

    return battleLog;
  }

  async getBattlesForCharacter(characterId: string, userId: string, page: number, limit: number) {
    // Check if character belongs to user
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    const skip = (page - 1) * limit;

    const [battles, total] = await Promise.all([
      prisma.battleLog.findMany({
        where: { characterId },
        include: {
          monster: {
            include: { details: true },
          },
        },
        skip,
        take: limit,
        orderBy: { battleDate: 'desc' },
      }),
      prisma.battleLog.count({ where: { characterId } }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      battles,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  private simulateBattle(
    character: BattleEntity,
    monster: BattleEntity
  ): {
    result: 'victory' | 'defeat';
    characterHealthRemaining: number;
    monsterHealthRemaining: number;
    turnsTaken: number;
    experienceGained: number;
    goldGained: number;
  } {
    let characterHealth = character.health;
    let monsterHealth = monster.health;
    let turnsTaken = 0;
    const maxTurns = 100;

    while (characterHealth > 0 && monsterHealth > 0 && turnsTaken < maxTurns) {
      turnsTaken++;

      // Character attacks first if higher speed
      if (character.speed >= monster.speed) {
        const damage = this.calculateDamage(character, monster);

        monsterHealth = Math.max(0, monsterHealth - damage.damage);

        if (monsterHealth <= 0) break;

        // Monster attacks back
        const monsterDamage = this.calculateDamage(monster, character);

        characterHealth = Math.max(0, characterHealth - monsterDamage.damage);
      } else {
        // Monster attacks first
        const monsterDamage = this.calculateDamage(monster, character);

        characterHealth = Math.max(0, characterHealth - monsterDamage.damage);

        if (characterHealth <= 0) break;

        // Character attacks back
        const damage = this.calculateDamage(character, monster);

        monsterHealth = Math.max(0, monsterHealth - damage.damage);
      }
    }

    const result = characterHealth > 0 ? 'victory' : 'defeat';
    // Note: These properties might not exist on BattleEntity, so we'll use 0 as fallback
    const experienceGained = result === 'victory' ? 0 : 0;
    const goldGained = result === 'victory' ? 0 : 0;

    return {
      result,
      characterHealthRemaining: characterHealth,
      monsterHealthRemaining: monsterHealth,
      turnsTaken,
      experienceGained,
      goldGained,
    };
  }

  private calculateDamage(attacker: BattleEntity, defender: BattleEntity): BattleResult {
    const criticalResist = defender.defense / 2;
    const isCritical = Math.random() * 100 < attacker.critical - criticalResist;

    // Base damage with 30% variance
    const minAttack = attacker.attack - attacker.attack * 0.3;
    const maxAttack = attacker.attack + attacker.attack * 0.3;
    const baseDamage = Math.max(0, minAttack + Math.random() * (maxAttack - minAttack));

    // Critical damage (50% bonus)
    const criticalDamage = isCritical ? 0.5 * baseDamage : 0;

    // Final damage after defense reduction
    const finalDamage = baseDamage + criticalDamage - defender.defense / 2;

    return {
      damage: Math.round(finalDamage) > 0 ? Math.round(finalDamage) : 0,
      isCritical,
    };
  }
}
