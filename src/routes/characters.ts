import { Router, type Response } from 'express';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import {
  validateCharacterCreation,
  validateIdParam,
  validateStatAllocation,
} from '../middleware/validation';
import type { AllocateStatsRequest, CreateCharacterRequest } from '../types';

const router = Router();

// Get all characters for the authenticated user
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
    }

    const characters = await prisma.character.findMany({
      where: { userId: req.user.userId },
      include: {
        job: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: characters,
    });
  } catch (error) {
    console.error('Get characters error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Create new character
router.post(
  '/',
  authenticateToken,
  validateCharacterCreation,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { name, job_id }: CreateCharacterRequest = req.body;

      // Get job class details
      const job = await prisma.jobClass.findUnique({
        where: { id: job_id },
      });

      if (!job) {
        return res.status(400).json({
          success: false,
          error: 'Invalid job class',
        });
      }

      // Check if character name already exists for this user
      const existingCharacter = await prisma.character.findFirst({
        where: {
          userId: req.user.userId,
          name,
        },
      });

      if (existingCharacter) {
        return res.status(400).json({
          success: false,
          error: 'Character name already exists',
        });
      }

      // Create character with base stats
      const newCharacter = await prisma.character.create({
        data: {
          userId: req.user.userId,
          name,
          jobId: job_id,
          level: 1,
          experience: 0,
          health: job.baseHealth,
          maxHealth: job.baseHealth,
          attack: job.baseAttack,
          defense: job.baseDefense,
          speed: job.baseSpeed,
          critical: job.baseCritical,
          statusPoints: 0,
          gold: 0,
        },
      });

      return res.status(201).json({
        success: true,
        data: newCharacter,
        message: 'Character created successfully',
      });
    } catch (error) {
      console.error('Create character error:', error);

      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Get character by ID
router.get('/:id', authenticateToken, validateIdParam, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
    }

    const { id } = req.params;

    const character = await prisma.character.findFirst({
      where: {
        id,
        userId: req.user.userId,
      },
      include: {
        job: true,
      },
    });

    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Character not found',
      });
    }

    res.json({
      success: true,
      data: character,
    });
  } catch (error) {
    console.error('Get character error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Update character
router.put('/:id', authenticateToken, validateIdParam, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
    }

    const { id } = req.params;
    const { name } = req.body;

    // Check if character exists and belongs to user
    const existingCharacter = await prisma.character.findFirst({
      where: {
        id,
        userId: req.user.userId,
      },
    });

    if (!existingCharacter) {
      return res.status(404).json({
        success: false,
        error: 'Character not found',
      });
    }

    // Update character
    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: { name },
    });

    return res.json({
      success: true,
      data: updatedCharacter,
      message: 'Character updated successfully',
    });
  } catch (error) {
    console.error('Update character error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Delete character
router.delete(
  '/:id',
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

      const { id } = req.params;

      // Check if character exists and belongs to user
      const existingCharacter = await prisma.character.findFirst({
        where: {
          id,
          userId: req.user.userId,
        },
      });

      if (!existingCharacter) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      // Delete character (cascade will handle related data)
      await prisma.character.delete({
        where: { id },
      });

      res.json({
        success: true,
        message: 'Character deleted successfully',
      });
    } catch (error) {
      console.error('Delete character error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Allocate status points
router.post(
  '/:id/allocate-stats',
  authenticateToken,
  validateIdParam,
  validateStatAllocation,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { id } = req.params;
      const {
        health_points,
        attack_points,
        defense_points,
        speed_points,
        critical_points,
      }: AllocateStatsRequest = req.body;

      // Check if character exists and belongs to user
      const char = await prisma.character.findFirst({
        where: {
          id,
          userId: req.user.userId,
        },
      });

      if (!char) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      const totalPoints =
        health_points + attack_points + defense_points + speed_points + critical_points;

      if (totalPoints > char.statusPoints) {
        return res.status(400).json({
          success: false,
          error: 'Not enough status points available',
        });
      }

      // Update character stats
      const updatedCharacter = await prisma.character.update({
        where: { id },
        data: {
          health: { increment: health_points * 10 },
          maxHealth: { increment: health_points * 10 },
          attack: { increment: attack_points },
          defense: { increment: defense_points },
          speed: { increment: speed_points },
          critical: { increment: critical_points },
          statusPoints: { decrement: totalPoints },
        },
      });

      res.json({
        success: true,
        data: updatedCharacter,
        message: 'Stats allocated successfully',
      });
    } catch (error) {
      console.error('Allocate stats error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

export default router;
