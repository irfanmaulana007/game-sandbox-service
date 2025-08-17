import { prisma } from '../database/prisma';

export class MonstersService {
  async getMonsters(
    page: number,
    limit: number,
    filters: { level?: number; mapId?: number; rank?: string }
  ) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (filters.level) where.level = filters.level;
    if (filters.mapId) where.mapId = filters.mapId;
    if (filters.rank) {
      where.details = { rank: filters.rank as any };
    }

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where,
        include: {
          details: true,
          map: true,
        },
        skip,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      monsters,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getMonsterById(id: number) {
    const monster = await prisma.monster.findUnique({
      where: { id },
      include: {
        details: true,
        map: true,
      },
    });

    if (!monster) {
      throw new Error('Monster not found');
    }

    return monster;
  }

  async getMonstersByMap(mapId: number, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where: { mapId },
        include: {
          details: true,
        },
        skip,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({ where: { mapId } }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      monsters,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getMonstersByRank(rank: string, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where: {
          details: { rank: rank as any },
        },
        include: {
          details: true,
          map: true,
        },
        skip,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({
        where: {
          details: { rank: rank as any },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      monsters,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }
}
