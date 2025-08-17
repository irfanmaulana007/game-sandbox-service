import { Router, type Response } from 'express';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import { validateIdParam } from '../middleware/validation';
import type { CreateExperienceLevelRequest, UpdateExperienceLevelRequest } from '../types';
import {
  getPaginationParams,
  getPrismaPagination,
  sendBadRequest,
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
} from '../utils/response';

const router = Router();

// Get all experience levels with pagination
router.get('/', async (req, res: Response) => {
  try {
    const { page, limit } = getPaginationParams(req.query);
    const pagination = getPrismaPagination(page, limit);

    // Get total count for pagination
    const total = await prisma.experienceLevel.count();

    const experienceLevels = await prisma.experienceLevel.findMany({
      orderBy: { level: 'asc' },
      ...pagination,
    });

    sendSuccessWithPagination(res, experienceLevels, total, page, limit);
  } catch (error) {
    console.error('Get experience levels error:', error);
    sendInternalError(res, 'Failed to retrieve experience levels');
  }
});

// Get experience level by level number
router.get('/:id', validateIdParam, async (req: any, res: Response) => {
  try {
    const level = parseInt(req.params.id);

    const experienceLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (!experienceLevel) {
      return sendNotFound(res, `Experience level ${level} not found`);
    }

    sendSuccess(res, experienceLevel);
  } catch (error) {
    console.error('Get experience level error:', error);
    sendInternalError(res, 'Failed to retrieve experience level');
  }
});

// Create new experience level (admin only)
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    // TODO: Add admin role check here
    // For now, allowing any authenticated user to create experience levels

    const { level, experience }: CreateExperienceLevelRequest = req.body;

    if (!level || !experience) {
      return sendBadRequest(res, 'Level and experience are required');
    }

    if (level < 1 || level > 99) {
      return sendBadRequest(res, 'Level must be between 1 and 99');
    }

    if (experience < 0) {
      return sendBadRequest(res, 'Experience cannot be negative');
    }

    // Check if level already exists
    const existingLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (existingLevel) {
      return sendBadRequest(res, `Level ${level} already exists`);
    }

    const newExperienceLevel = await prisma.experienceLevel.create({
      data: {
        level,
        experience,
      },
    });

    sendCreated(res, newExperienceLevel, 'Experience level created successfully');
  } catch (error) {
    console.error('Create experience level error:', error);
    sendInternalError(res, 'Failed to create experience level');
  }
});

// Update experience level (admin only)
router.put('/:id', authenticateToken, validateIdParam, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    // TODO: Add admin role check here
    // For now, allowing any authenticated user to update experience levels

    const level = parseInt(req.params.id);
    const { experience }: UpdateExperienceLevelRequest = req.body;

    if (!experience) {
      return sendBadRequest(res, 'Experience is required');
    }

    if (experience < 0) {
      return sendBadRequest(res, 'Experience cannot be negative');
    }

    const existingLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (!existingLevel) {
      return sendNotFound(res, `Experience level ${level} not found`);
    }

    const updatedExperienceLevel = await prisma.experienceLevel.update({
      where: { level },
      data: { experience },
    });

    sendSuccess(res, updatedExperienceLevel, 'Experience level updated successfully');
  } catch (error) {
    console.error('Update experience level error:', error);
    sendInternalError(res, 'Failed to update experience level');
  }
});

// Delete experience level (admin only)
router.delete(
  '/:id',
  authenticateToken,
  validateIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      // TODO: Add admin role check here
      // For now, allowing any authenticated user to delete experience levels

      const level = parseInt(req.params.id);

      const existingLevel = await prisma.experienceLevel.findUnique({
        where: { level },
      });

      if (!existingLevel) {
        return sendNotFound(res, `Experience level ${level} not found`);
      }

      await prisma.experienceLevel.delete({
        where: { level },
      });

      sendSuccess(res, null, `Experience level ${level} deleted successfully`);
    } catch (error) {
      console.error('Delete experience level error:', error);
      sendInternalError(res, 'Failed to delete experience level');
    }
  }
);

// Bulk create experience levels (admin only)
router.post('/bulk', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    // TODO: Add admin role check here
    // For now, allowing any authenticated user to bulk create experience levels

    const { experienceLevels }: { experienceLevels: CreateExperienceLevelRequest[] } = req.body;

    if (!Array.isArray(experienceLevels) || experienceLevels.length === 0) {
      return sendBadRequest(res, 'Experience levels array is required and cannot be empty');
    }

    // Validate all levels
    for (const expLevel of experienceLevels) {
      if (!expLevel.level || !expLevel.experience) {
        return sendBadRequest(res, 'All levels must have level and experience values');
      }

      if (expLevel.level < 1 || expLevel.level > 99) {
        return sendBadRequest(res, `Level ${expLevel.level} must be between 1 and 99`);
      }

      if (expLevel.experience < 0) {
        return sendBadRequest(res, `Experience for level ${expLevel.level} cannot be negative`);
      }
    }

    // Check for duplicate levels
    const levels = experienceLevels.map(el => el.level);
    const uniqueLevels = new Set(levels);

    if (uniqueLevels.size !== levels.length) {
      return sendBadRequest(res, 'Duplicate levels found in the array');
    }

    // Check if any levels already exist
    const existingLevels = await prisma.experienceLevel.findMany({
      where: { level: { in: levels } },
    });

    if (existingLevels.length > 0) {
      const existingLevelNumbers = existingLevels.map(el => el.level);

      return sendBadRequest(res, `Levels ${existingLevelNumbers.join(', ')} already exist`);
    }

    // Create all experience levels
    const createdLevels = await prisma.experienceLevel.createMany({
      data: experienceLevels,
    });

    sendCreated(
      res,
      { count: createdLevels.count },
      `${createdLevels.count} experience levels created successfully`
    );
  } catch (error) {
    console.error('Bulk create experience levels error:', error);
    sendInternalError(res, 'Failed to bulk create experience levels');
  }
});

// Get experience required for next level
router.get('/next/:currentExp', async (req, res: Response) => {
  try {
    const currentExp = parseInt(req.params.currentExp);

    if (isNaN(currentExp) || currentExp < 0) {
      return sendBadRequest(res, 'Current experience must be a valid non-negative number');
    }

    // Find the next level based on current experience
    const nextLevel = await prisma.experienceLevel.findFirst({
      where: { experience: { gt: currentExp } },
      orderBy: { experience: 'asc' },
    });

    if (!nextLevel) {
      return sendSuccess(res, {
        message: 'Maximum level reached',
        currentLevel: 99,
        experienceToNext: 0,
        progress: 100,
      });
    }

    // Find current level
    const currentLevel = await prisma.experienceLevel.findFirst({
      where: { experience: { lte: currentExp } },
      orderBy: { experience: 'desc' },
    });

    const currentLevelNumber = currentLevel ? currentLevel.level : 0;
    const experienceToNext = nextLevel.experience - currentExp;
    const experienceInCurrentLevel = currentLevel
      ? currentExp - currentLevel.experience
      : currentExp;
    const experienceForCurrentLevel =
      nextLevel.experience - (currentLevel ? currentLevel.experience : 0);
    const progress = Math.round((experienceInCurrentLevel / experienceForCurrentLevel) * 100);

    sendSuccess(res, {
      currentLevel: currentLevelNumber,
      nextLevel: nextLevel.level,
      experienceToNext,
      progress,
      currentExperience: currentExp,
      nextLevelExperience: nextLevel.experience,
    });
  } catch (error) {
    console.error('Get next level info error:', error);
    sendInternalError(res, 'Failed to get next level information');
  }
});

export default router;
