import { prisma } from '~/database/prisma';
import type { CreateExperienceLevelRequest, UpdateExperienceLevelRequest } from '~/types';

export class ExperienceService {
  async getExperienceLevels(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [total, experienceLevels] = await Promise.all([
      prisma.experienceLevel.count(),
      prisma.experienceLevel.findMany({
        orderBy: { level: 'asc' },
        skip,
        take: limit,
      }),
    ]);

    return { experienceLevels, total };
  }

  async getExperienceLevelByLevel(level: number) {
    const experienceLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (!experienceLevel) {
      throw new Error(`Experience level ${level} not found`);
    }

    return experienceLevel;
  }

  async createExperienceLevel(levelData: CreateExperienceLevelRequest) {
    const { level, experience } = levelData;

    if (!level || !experience) {
      throw new Error('Level and experience are required');
    }

    if (level < 1 || level > 99) {
      throw new Error('Level must be between 1 and 99');
    }

    if (experience < 0) {
      throw new Error('Experience cannot be negative');
    }

    // Check if level already exists
    const existingLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (existingLevel) {
      throw new Error(`Level ${level} already exists`);
    }

    const newExperienceLevel = await prisma.experienceLevel.create({
      data: {
        level,
        experience,
      },
    });

    return newExperienceLevel;
  }

  async updateExperienceLevel(level: number, updateData: UpdateExperienceLevelRequest) {
    const { experience } = updateData;

    if (!experience) {
      throw new Error('Experience is required');
    }

    if (experience < 0) {
      throw new Error('Experience cannot be negative');
    }

    const existingLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (!existingLevel) {
      throw new Error(`Experience level ${level} not found`);
    }

    const updatedExperienceLevel = await prisma.experienceLevel.update({
      where: { level },
      data: { experience },
    });

    return updatedExperienceLevel;
  }

  async deleteExperienceLevel(level: number) {
    const existingLevel = await prisma.experienceLevel.findUnique({
      where: { level },
    });

    if (!existingLevel) {
      throw new Error(`Experience level ${level} not found`);
    }

    await prisma.experienceLevel.delete({
      where: { level },
    });

    return true;
  }

  async bulkCreateExperienceLevels(experienceLevels: CreateExperienceLevelRequest[]) {
    if (!Array.isArray(experienceLevels) || experienceLevels.length === 0) {
      throw new Error('Experience levels array is required and cannot be empty');
    }

    // Validate all levels
    for (const expLevel of experienceLevels) {
      if (!expLevel.level || !expLevel.experience) {
        throw new Error('All levels must have level and experience values');
      }

      if (expLevel.level < 1 || expLevel.level > 99) {
        throw new Error(`Level ${expLevel.level} must be between 1 and 99`);
      }

      if (expLevel.experience < 0) {
        throw new Error(`Experience for level ${expLevel.level} cannot be negative`);
      }
    }

    // Check for duplicate levels
    const levels = experienceLevels.map(el => el.level);
    const uniqueLevels = new Set(levels);

    if (uniqueLevels.size !== levels.length) {
      throw new Error('Duplicate levels found in the array');
    }

    // Check if any levels already exist
    const existingLevels = await prisma.experienceLevel.findMany({
      where: { level: { in: levels } },
    });

    if (existingLevels.length > 0) {
      const existingLevelNumbers = existingLevels.map(el => el.level);

      throw new Error(`Levels ${existingLevelNumbers.join(', ')} already exist`);
    }

    // Create all experience levels
    const createdLevels = await prisma.experienceLevel.createMany({
      data: experienceLevels,
    });

    return { count: createdLevels.count };
  }

  async getNextLevelInfo(currentExp: number) {
    if (isNaN(currentExp) || currentExp < 0) {
      throw new Error('Current experience must be a valid non-negative number');
    }

    // Find the next level based on current experience
    const nextLevel = await prisma.experienceLevel.findFirst({
      where: { experience: { gt: currentExp } },
      orderBy: { experience: 'asc' },
    });

    if (!nextLevel) {
      return {
        message: 'Maximum level reached',
        currentLevel: 99,
        experienceToNext: 0,
        progress: 100,
      };
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

    return {
      currentLevel: currentLevelNumber,
      nextLevel: nextLevel.level,
      experienceToNext,
      progress,
      currentExperience: currentExp,
      nextLevelExperience: nextLevel.experience,
    };
  }
}
