import type { MonsterRank, Prisma } from '@prisma/client';
import { prisma } from '~/database/prisma';

export class MonstersService {
  async getMonsters(
    page: number,
    limit: number,
    filters: { level?: number; mapId?: number; rank?: MonsterRank }
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.MonsterWhereInput = {};

    if (filters.level) where.level = filters.level;
    if (filters.mapId) where.monster_detail_id = filters.mapId;
    if (filters.rank) {
      where.rank = filters.rank;
    }

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where,
        include: {
          monster_detail: true,
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
        monster_detail: true,
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
        where: { monster_detail: { map_zone_id: mapId } },
        include: {
          monster_detail: true,
        },
        skip,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({ where: { monster_detail: { map_zone_id: mapId } } }),
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

  async getMonstersByRank(rank: MonsterRank, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where: {
          rank,
        },
        include: {
          monster_detail: true,
        },
        skip,
        take: limit,
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({ where: { rank } }),
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
