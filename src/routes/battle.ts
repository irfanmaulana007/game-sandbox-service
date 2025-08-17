import { Router, type Response } from 'express';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import { validateBattleRequest, validateIdParam } from '../middleware/validation';
import type { BattleEntity, BattleRequest, BattleResult } from '../types';

const router = Router();

// Start a battle
router.post(
  '/start',
  authenticateToken,
  validateBattleRequest,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { character_id, monster_id }: BattleRequest = req.body;

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
        return res.status(404).json({
          success: false,
          error: 'Character or monster not found',
        });
      }

      // Check if character belongs to user
      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      // Simulate battle
      const battleResult = simulateBattle(character, monster);

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

      res.json({
        success: true,
        data: {
          battleLog,
          battleResult: battleResult.result,
          experienceGained: battleResult.experienceGained,
          goldGained: battleResult.goldGained,
        },
      });
    } catch (error) {
      console.error('Battle start error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Get battle by ID
router.get('/:id', authenticateToken, validateIdParam, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
    }

    const { id } = req.params;

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
      return res.status(404).json({
        success: false,
        error: 'Battle not found',
      });
    }

    // Check if battle belongs to user
    if (battleLog.character.userId !== req.user.userId) {
      return res.status(403).json({
        success: false,
        error: 'Battle does not belong to user',
      });
    }

    res.json({
      success: true,
      data: battleLog,
    });
  } catch (error) {
    console.error('Get battle error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get battles for a character
router.get(
  '/character/:characterId',
  authenticateToken,
  validateIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { characterId } = req.params;
      const { page = 1, limit = 20 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      // Check if character belongs to user
      const character = await prisma.character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      const [battles, total] = await Promise.all([
        prisma.battleLog.findMany({
          where: { characterId },
          include: {
            monster: {
              include: { details: true },
            },
          },
          skip,
          take: Number(limit),
          orderBy: { battleDate: 'desc' },
        }),
        prisma.battleLog.count({ where: { characterId } }),
      ]);

      const totalPages = Math.ceil(total / Number(limit));

      res.json({
        success: true,
        data: battles,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          totalPages,
        },
      });
    } catch (error) {
      console.error('Get character battles error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Battle simulation function
function simulateBattle(character: any, monster: any): any {
  let characterHealth = character.health;
  let monsterHealth = monster.health;
  let turnsTaken = 0;
  const maxTurns = 100;

  while (characterHealth > 0 && monsterHealth > 0 && turnsTaken < maxTurns) {
    turnsTaken++;

    // Character attacks first if higher speed
    if (character.speed >= monster.speed) {
      const damage = calculateDamage(character, monster);

      monsterHealth = Math.max(0, monsterHealth - damage.damage);

      if (monsterHealth <= 0) break;

      // Monster attacks back
      const monsterDamage = calculateDamage(monster, character);

      characterHealth = Math.max(0, characterHealth - monsterDamage.damage);
    } else {
      // Monster attacks first
      const monsterDamage = calculateDamage(monster, character);

      characterHealth = Math.max(0, characterHealth - monsterDamage.damage);

      if (characterHealth <= 0) break;

      // Character attacks back
      const damage = calculateDamage(character, monster);

      monsterHealth = Math.max(0, monsterHealth - damage.damage);
    }
  }

  const result = characterHealth > 0 ? 'victory' : 'defeat';
  const experienceGained = result === 'victory' ? monster.experienceReward : 0;
  const goldGained = result === 'victory' ? monster.goldReward : 0;

  return {
    result,
    characterHealthRemaining: characterHealth,
    monsterHealthRemaining: monsterHealth,
    turnsTaken,
    experienceGained,
    goldGained,
  };
}

// Damage calculation function
function calculateDamage(attacker: BattleEntity, defender: BattleEntity): BattleResult {
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

export default router;
