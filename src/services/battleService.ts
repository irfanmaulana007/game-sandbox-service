import {
  BattleLogDetailType,
  type Character,
  type Equipment,
  type Monster,
  type MonsterDetails,
  type Rarity,
} from '@prisma/client';
import type { JsonValue } from '@prisma/client/runtime/library';
import { prisma } from '~/database/prisma';
import type { BattleEntity, BattleRequest, BattleResponse, BattleResult } from '~/types';
import { CharacterService } from './characterService';

const characterService = new CharacterService();

export class BattleService {
  async startBattle(userId: string, battleData: BattleRequest): Promise<BattleResponse> {
    // Restore character health
    await characterService.restCharacter(battleData.character_id, userId);

    const { character_id, map_zone_id } = battleData;

    const battleLogs: { type: BattleLogDetailType; message: string }[] = [];

    // Get character data
    const character = await prisma.character.findUnique({
      where: { id: character_id },
      include: { job: true },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Check if character belongs to user
    if (character.user_id !== userId) {
      throw new Error('Character does not belong to user');
    }

    // Get map zone and its monsters
    const mapZone = await prisma.gameMapZone.findUnique({
      where: { id: map_zone_id },
      include: {
        monsters_details: {
          include: {
            monsters: true,
          },
        },
      },
    });

    if (!mapZone) {
      throw new Error('Map zone not found');
    }

    // Randomize monster selection based on rank probability
    const selectedMonster = this.selectRandomMonster(mapZone.monsters_details);

    if (!selectedMonster) {
      throw new Error('No monsters available in this map zone');
    }

    battleLogs.push({
      type: BattleLogDetailType.information,
      message: `Starting battle with ${selectedMonster.monster_detail.name} (${selectedMonster.rank})`,
    });

    // Prepare battle
    await this.battlePreparation(character, battleLogs);

    // Simulate battle
    const battleResult = this.simulateBattle(character, selectedMonster, battleLogs);

    // Subtract half of the monster's gold reward from the character's gold
    let goldToSubtract = Math.floor(selectedMonster.gold_reward / 2);

    if (goldToSubtract > character.gold) {
      goldToSubtract = character.gold;
    }

    // Create battle log
    const battleLog = await prisma.battleLog.create({
      data: {
        character_id,
        monster_id: selectedMonster.id,
        battleResult: battleResult.result,
        character_health_remaining: battleResult.characterHealthRemaining,
        monster_health_remaining: battleResult.monsterHealthRemaining,
        turns_taken: battleResult.turnsTaken,
        experience_gained: battleResult.experienceGained,
        gold_gained: battleResult.result === 'victory' ? battleResult.goldGained : -goldToSubtract,
        battleLogDetails: {
          create: battleLogs.map(log => ({
            type: log.type,
            message: log.message,
          })),
        },
      },
      include: {
        battleLogDetails: true,
      },
    });

    let isCharacterGainedLevel = false;
    let droppedEquipment: Equipment | null = null;

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

      isCharacterGainedLevel = await this.checkIfCharacterGainedLevel(character_id);

      if (isCharacterGainedLevel) {
        await characterService.levelupCharacter(character_id);
      }

      // Handle equipment drop
      droppedEquipment = await this.getEquipmentDrop(selectedMonster);

      if (droppedEquipment) {
        // Add equipment to character's inventory
        await prisma.characterEquipment.create({
          data: {
            character_id,
            equipment_id: droppedEquipment.id,
            equipped: false, // Equipment starts as unequipped
          },
        });

        // Add battle log entry for equipment drop
        battleLogs.push({
          type: BattleLogDetailType.reward,
          message: `Obtained ${droppedEquipment.name} (${droppedEquipment.rarity})!`,
        });
      }
    } else {
      await prisma.character.update({
        where: { id: character_id },
        data: {
          gold: character.gold - goldToSubtract,
        },
      });
    }

    return {
      battleLog,
      battleResult: battleResult.result,
      experienceGained: battleResult.experienceGained,
      goldGained: battleResult.goldGained,
      levelGained: isCharacterGainedLevel,
      monster: selectedMonster,
      equipmentDropped: droppedEquipment || undefined,
    };
  }

  private selectRandomMonster(
    monsterDetails: Array<{
      id: number;
      name: string;
      description: string | null;
      image_url: string | null;
      drop_table: JsonValue;
      created_at: Date;
      monsters: Array<{
        id: number;
        monster_detail_id: number;
        rank: 'normal' | 'elite' | 'boss' | 'legendary';
        level: number;
        health: number;
        attack: number;
        defense: number;
        speed: number;
        critical: number;
        experience_reward: number;
        gold_reward: number;
        created_at: Date;
      }>;
    }>
  ): (Monster & { monster_detail: MonsterDetails }) | null {
    // Flatten all monsters from all monster details
    const allMonsters: Array<Monster & { monster_detail: MonsterDetails }> = [];

    for (const monsterDetail of monsterDetails) {
      for (const monster of monsterDetail.monsters) {
        allMonsters.push({
          ...monster,
          monster_detail: {
            id: monsterDetail.id,
            name: monsterDetail.name,
            description: monsterDetail.description || '',
            image_url: monsterDetail.image_url || '',
            drop_table: monsterDetail.drop_table as JsonValue,
            created_at: monsterDetail.created_at,
            map_zone_id: null,
          },
        });
      }
    }

    if (allMonsters.length === 0) {
      return null;
    }

    // Define probability weights based on monster rank
    const rankWeights: Record<string, number> = {
      normal: 100, // 100% base probability
      elite: 45, // 45% of normal probability
      boss: 20, // 20% of normal probability
      legendary: 5, // 5% of normal probability
    };

    // Calculate total weight
    const totalWeight = allMonsters.reduce((sum, monster) => {
      return sum + rankWeights[monster.rank];
    }, 0);

    // Generate random number
    const random = Math.random() * totalWeight;

    // Select monster based on weighted probability
    let currentWeight = 0;

    for (const monster of allMonsters) {
      currentWeight += rankWeights[monster.rank];
      if (random <= currentWeight) {
        return monster;
      }
    }

    // Fallback to last monster (shouldn't reach here)
    return allMonsters[allMonsters.length - 1];
  }

  async getBattleById(id: string, userId: string) {
    const battleLog = await prisma.battleLog.findUnique({
      where: { id },
      include: {
        character: {
          include: { job: true },
        },
        monster: {
          include: { monster_detail: true },
        },
      },
    });

    if (!battleLog) {
      throw new Error('Battle not found');
    }

    // Check if battle belongs to user
    if (battleLog.character.user_id !== userId) {
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

    if (character.user_id !== userId) {
      throw new Error('Character does not belong to user');
    }

    const skip = (page - 1) * limit;

    const [battles, total] = await Promise.all([
      prisma.battleLog.findMany({
        where: { character_id: characterId },
        include: {
          monster: {
            include: { monster_detail: true },
          },
        },
        skip,
        take: limit,
        orderBy: { battle_date: 'desc' },
      }),
      prisma.battleLog.count({ where: { character_id: characterId } }),
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

  private generateBattleTurns(
    character: Character,
    monster: Monster & { monster_detail: MonsterDetails }
  ): ('character' | 'monster')[] {
    const turns: ('character' | 'monster')[] = [];
    const MAX_TURN = 100;

    // Calculate total speed for both entities
    const characterSpeed = character.speed;

    const monsterSpeed = monster.speed;

    // Determine who goes first based on speed (higher speed attacks first)
    const firstAttacker = characterSpeed >= monsterSpeed ? 'character' : 'monster';

    const secondAttacker = characterSpeed >= monsterSpeed ? 'monster' : 'character';

    // Calculate how many times each entity can attack within MAX_TURN
    let firstAttackerTurns = 0;
    let secondAttackerTurns = 0;

    // Distribute turns based on speed ratio, ensuring we don't exceed MAX_TURN
    const totalSpeed = characterSpeed + monsterSpeed;

    if (totalSpeed > 0) {
      const firstAttackerSpeed = firstAttacker === 'character' ? characterSpeed : monsterSpeed;

      firstAttackerTurns = Math.ceil((firstAttackerSpeed / totalSpeed) * MAX_TURN);
      secondAttackerTurns = MAX_TURN - firstAttackerTurns;
    }

    // Build the turn order with alternating pattern based on speed ratio
    let firstCount = 0;
    let secondCount = 0;

    for (let i = 0; i < MAX_TURN; i++) {
      // Determine if first attacker should go based on their turn allocation
      if (
        firstCount < firstAttackerTurns &&
        (secondCount >= secondAttackerTurns ||
          firstCount / firstAttackerTurns <= secondCount / secondAttackerTurns)
      ) {
        turns.push(firstAttacker);
        firstCount++;
      } else {
        turns.push(secondAttacker);
        secondCount++;
      }
    }

    return turns;
  }

  private async battlePreparation(
    character: Character,
    battleLogs: { type: BattleLogDetailType; message: string }[]
  ) {
    const healthToRestore = character.max_health * 0.1;
    let healthRestored = character.health + healthToRestore;

    if (healthRestored > character.max_health) {
      healthRestored = character.max_health;
    }

    if (healthRestored !== character.max_health) {
      battleLogs.push({
        type: BattleLogDetailType.information,
        message: `${character.name} rested and restored ${healthToRestore} health.`,
      });
      await prisma.character.update({
        where: { id: character.id },
        data: {
          health: healthRestored,
        },
      });
    }

    battleLogs.push({
      type: BattleLogDetailType.information,
      message: `${character.name} current health: ${healthRestored}`,
    });
  }

  private simulateBattle(
    character: Character,
    monster: Monster & { monster_detail: MonsterDetails },
    battleLogs: { type: BattleLogDetailType; message: string }[]
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

    // Generate battle turns based on speed
    const battleTurns = this.generateBattleTurns(character, monster);

    const characterBattleEntity: BattleEntity = {
      id: character.id,
      health: characterHealth,
      attack: character.attack,
      defense: character.defense,
      speed: character.speed,
      critical: character.critical,
    };

    const monsterBattleEntity: BattleEntity = {
      id: monster.id,
      health: monsterHealth,
      attack: monster.attack,
      defense: monster.defense,
      speed: monster.speed,
      critical: monster.critical,
    };

    // Execute battle using the generated turn order
    for (const turn of battleTurns) {
      if (characterHealth <= 0 || monsterHealth <= 0) break;

      turnsTaken++;

      if (turn === 'character') {
        // Character attacks
        const damage = this.calculateDamage(characterBattleEntity, monsterBattleEntity);

        monsterHealth = Math.max(0, monsterHealth - damage.damage);
        battleLogs.push({
          type: BattleLogDetailType.damage_dealt,
          message: `${character.name} attacks ${monster.monster_detail.name} for ${damage.damage} damage${damage.isCritical ? ' CRITICALLY' : ''}. ${monsterHealth} health remaining.`,
        });

        if (monsterHealth <= 0) break;
      } else {
        // Monster attacks
        const monsterDamage = this.calculateDamage(monsterBattleEntity, characterBattleEntity);

        characterHealth = Math.max(0, characterHealth - monsterDamage.damage);
        battleLogs.push({
          type: BattleLogDetailType.damage_received,
          message: `${monster.monster_detail.name} attacks ${character.name} for ${monsterDamage.damage} damage${monsterDamage.isCritical ? ' CRITICALLY' : ''}. ${characterHealth} health remaining.`,
        });

        if (characterHealth <= 0) break;
      }
    }

    const result = characterHealth > 0 ? 'victory' : 'defeat';
    // Note: These properties might not exist on BattleEntity, so we'll use 0 as fallback
    const experienceGained = result === 'victory' ? monster.experience_reward : 0;
    const goldGained = result === 'victory' ? monster.gold_reward : 0;

    battleLogs.push({
      type: BattleLogDetailType.information,
      message: `${character.name} health: ${characterHealth}`,
    });
    battleLogs.push({
      type: BattleLogDetailType.information,
      message: `${monster.monster_detail.name} health: ${monsterHealth}`,
    });

    if (result === 'victory') {
      battleLogs.push({
        type: BattleLogDetailType.reward,
        message: `${character.name} experience gained: ${experienceGained}`,
      });
      battleLogs.push({
        type: BattleLogDetailType.reward,
        message: `${monster.monster_detail.name} gold gained: ${goldGained}`,
      });
    }

    battleLogs.push({
      type: BattleLogDetailType.information,
      message: `The winner is ${result === 'victory' ? character.name : monster.monster_detail.name}`,
    });

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

  private async checkIfCharacterGainedLevel(characterId: string): Promise<boolean> {
    // Get the character's current experience and level
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      return false;
    }

    // Find the next level requirement
    const nextLevel = await prisma.experienceLevel.findFirst({
      where: { experience: { gt: character.experience } },
      orderBy: { experience: 'asc' },
    });

    if (!nextLevel) {
      // Character is at max level
      return false;
    }

    // Find the current level requirement
    const currentLevel = await prisma.experienceLevel.findFirst({
      where: { experience: { lte: character.experience } },
      orderBy: { experience: 'desc' },
    });

    const currentLevelNumber = currentLevel ? currentLevel.level : 0;

    // Check if character's level is less than what it should be based on experience
    return character.level < currentLevelNumber;
  }

  private async getEquipmentDrop(
    monster: Monster & { monster_detail: MonsterDetails }
  ): Promise<Equipment | null> {
    // Determine which equipment rarities this monster can drop based on its rank
    const allowedRarities = this.getAllowedEquipmentRarities(monster.rank);

    if (allowedRarities.length === 0) {
      return null;
    }

    // Get all equipment that matches the monster's level and allowed rarities
    const availableEquipment = await prisma.equipment.findMany({
      where: {
        rarity: { in: allowedRarities },
        min_level: { lte: monster.level + 5 }, // Allow equipment up to 5 levels higher
      },
    });

    if (availableEquipment.length === 0) {
      return null;
    }

    // Calculate drop probability based on monster level and equipment rarity
    const equipmentWithProbabilities = availableEquipment.map(equipment => {
      const baseDropRate = Number(equipment.drop_rate);

      console.log('🚀 ~ BattleService ~ getEquipmentDrop ~ baseDropRate:', baseDropRate);
      const levelMultiplier = this.calculateLevelMultiplier(monster.level, equipment.min_level);

      console.log('🚀 ~ BattleService ~ getEquipmentDrop ~ levelMultiplier:', levelMultiplier);
      const rarityMultiplier = this.calculateRarityMultiplier(equipment.rarity, monster.rank);

      console.log('🚀 ~ BattleService ~ getEquipmentDrop ~ rarityMultiplier:', rarityMultiplier);
      const finalDropRate = baseDropRate * levelMultiplier * rarityMultiplier;

      console.log('🚀 ~ BattleService ~ getEquipmentDrop ~ finalDropRate:', finalDropRate);

      return {
        equipment,
        dropRate: finalDropRate,
      };
    });

    // Sort by drop rate (highest first)
    equipmentWithProbabilities.sort((a, b) => b.dropRate - a.dropRate);

    // Calculate total probability and apply global reduction
    const totalProbability = equipmentWithProbabilities.reduce(
      (sum, item) => sum + item.dropRate,
      0
    );

    if (totalProbability === 0) {
      return null;
    }

    // Apply global drop rate reduction (make drops much rarer overall)
    const globalDropRateReduction = 0.1; // 90% reduction

    console.log(
      '🚀 ~ BattleService ~ getEquipmentDrop ~ globalDropRateReduction:',
      globalDropRateReduction
    );
    const adjustedTotalProbability = totalProbability * globalDropRateReduction;

    console.log(
      '🚀 ~ BattleService ~ getEquipmentDrop ~ adjustedTotalProbability:',
      adjustedTotalProbability
    );

    console.log('🚀 ~ BattleService ~ getEquipmentDrop ~ Math.random():', Math.random());
    // First, determine if ANY equipment drops at all
    if (Math.random() > adjustedTotalProbability) {
      return null; // No equipment drops
    }

    // If equipment does drop, select which one based on relative probabilities
    const random = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (const item of equipmentWithProbabilities) {
      cumulativeProbability += item.dropRate;
      if (random <= cumulativeProbability) {
        return item.equipment;
      }
    }

    return null;
  }

  private getAllowedEquipmentRarities(monsterRank: string): Rarity[] {
    switch (monsterRank) {
      case 'legendary':
        return ['legendary'];
      case 'boss':
        return ['epic'];
      case 'elite':
        return ['rare'];
      case 'normal':
        return ['common', 'uncommon'];
      default:
        return [];
    }
  }

  private calculateLevelMultiplier(monsterLevel: number, equipmentMinLevel: number): number {
    const levelDifference = Math.abs(monsterLevel - equipmentMinLevel);

    if (levelDifference <= 2) {
      return 0.3; // Same level range - reduced from 1.0
    } else if (levelDifference <= 5) {
      return 0.2; // Slightly different level - reduced from 0.7
    } else if (levelDifference <= 10) {
      return 0.1; // Different level range - reduced from 0.4
    } else {
      return 0.02; // Very different level range - reduced from 0.1
    }
  }

  private calculateRarityMultiplier(equipmentRarity: Rarity, monsterRank: string): number {
    // Base multipliers for each rarity - significantly reduced
    const rarityMultipliers = {
      common: 0.3,
      uncommon: 0.2,
      rare: 0.15,
      epic: 0.08,
      legendary: 0.05,
    };

    // Rank-specific bonuses - significantly reduced
    const rankMultipliers = {
      normal: { common: 0.4, uncommon: 0.3, rare: 0.1, epic: 0.02, legendary: 0.01 },
      elite: { common: 0.2, uncommon: 0.15, rare: 0.4, epic: 0.08, legendary: 0.02 },
      boss: { common: 0.15, uncommon: 0.1, rare: 0.25, epic: 0.3, legendary: 0.08 },
      legendary: { common: 0.05, uncommon: 0.02, rare: 0.1, epic: 0.2, legendary: 0.4 },
    };

    const baseMultiplier =
      rarityMultipliers[equipmentRarity as keyof typeof rarityMultipliers] || 0.3;
    const rankMultiplier =
      rankMultipliers[monsterRank as keyof typeof rankMultipliers]?.[
        equipmentRarity as keyof typeof rarityMultipliers
      ] || 0.3;

    return baseMultiplier * rankMultiplier;
  }
}
