import type { MapDifficulty, Prisma } from '@prisma/client';
import { prisma } from '~/database/prisma';

export class MapsService {
  async getMaps(
    page: number,
    limit: number,
    filters: { difficulty?: MapDifficulty; minLevel?: number; maxLevel?: number }
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.GameMapWhereInput = {};

    if (filters.difficulty) where.difficulty = filters.difficulty;
    if (filters.minLevel) where.min_level = { gte: filters.minLevel };
    if (filters.maxLevel) where.max_level = { lte: filters.maxLevel };

    const [maps, total] = await Promise.all([
      prisma.gameMap.findMany({
        where,
        include: {
          _count: {
            select: { monsters: true },
          },
        },
        skip,
        take: limit,
        orderBy: { min_level: 'asc' },
      }),
      prisma.gameMap.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      maps,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getMapById(id: number) {
    const map = await prisma.gameMap.findUnique({
      where: { id },
      include: {
        monsters: {
          include: {
            details: true,
          },
          orderBy: { level: 'asc' },
        },
      },
    });

    if (!map) {
      throw new Error('Map not found');
    }

    return map;
  }
}
