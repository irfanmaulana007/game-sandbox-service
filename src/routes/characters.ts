import { Router, type Response } from 'express';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import {
  validateCharacterCreation,
  validateIdParam,
  validateStatAllocation,
} from '../middleware/validation';
import type { AllocateStatsRequest, CreateCharacterRequest } from '../types';
import {
  getPaginationParams,
  getPrismaPagination,
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
} from '../utils/response';

const router = Router();

// Get all characters for the authenticated user
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { page, limit } = getPaginationParams(req.query);
    const pagination = getPrismaPagination(page, limit);

    // Get total count for pagination
    const total = await prisma.character.count({
      where: { userId: req.user.userId },
    });

    const characters = await prisma.character.findMany({
      where: { userId: req.user.userId },
      include: {
        job: true,
      },
      orderBy: { createdAt: 'desc' },
      ...pagination,
    });

    sendSuccessWithPagination(res, characters, total, page, limit);
  } catch (error) {
    console.error('Get characters error:', error);
    sendInternalError(res, 'Failed to retrieve characters');
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
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { name, job_id }: CreateCharacterRequest = req.body;

      // Get job class details
      const job = await prisma.jobClass.findUnique({
        where: { id: job_id },
      });

      if (!job) {
        return sendBadRequest(res, 'Invalid job class');
      }

      // Check if character name already exists for this user
      const existingCharacter = await prisma.character.findFirst({
        where: {
          userId: req.user.userId,
          name,
        },
      });

      if (existingCharacter) {
        return sendConflict(res, 'Character name already exists');
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

      return sendCreated(res, newCharacter, 'Character created successfully');
    } catch (error) {
      console.error('Create character error:', error);
      return sendInternalError(res, 'Failed to create character');
    }
  }
);

// Get character by ID
router.get('/:id', authenticateToken, validateIdParam, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
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
      return sendNotFound(res, 'Character not found');
    }

    sendSuccess(res, character);
  } catch (error) {
    console.error('Get character error:', error);
    sendInternalError(res, 'Failed to retrieve character');
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
      return sendNotFound(res, 'Character not found');
    }

    // Update character
    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: { name },
    });

    return sendSuccess(res, updatedCharacter, 'Character updated successfully');
  } catch (error) {
    console.error('Update character error:', error);
    sendInternalError(res, 'Failed to update character');
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
        return sendUnauthorized(res, 'User not authenticated');
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
        return sendNotFound(res, 'Character not found');
      }

      // Delete character (cascade will handle related data)
      await prisma.character.delete({
        where: { id },
      });

      sendSuccess(res, null, 'Character deleted successfully');
    } catch (error) {
      console.error('Delete character error:', error);
      sendInternalError(res, 'Failed to delete character');
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
        return sendUnauthorized(res, 'User not authenticated');
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
        return sendNotFound(res, 'Character not found');
      }

      const totalPoints =
        health_points + attack_points + defense_points + speed_points + critical_points;

      if (totalPoints > char.statusPoints) {
        return sendBadRequest(res, 'Not enough status points available');
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

      sendSuccess(res, updatedCharacter, 'Stats allocated successfully');
    } catch (error) {
      console.error('Allocate stats error:', error);
      sendInternalError(res, 'Failed to allocate stats');
    }
  }
);

export default router;
