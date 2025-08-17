import type { EquipmentType, Prisma, Rarity } from '@prisma/client';
import { prisma } from '~/database/prisma';

export class EquipmentService {
  async getEquipment(
    page: number,
    limit: number,
    filters: { type?: EquipmentType; rarity?: Rarity; minLevel?: number }
  ) {
    const skip = (page - 1) * limit;
    const where: Prisma.EquipmentWhereInput = {};

    if (filters.type) where.type = filters.type;
    if (filters.rarity) where.rarity = filters.rarity;
    if (filters.minLevel) where.min_level = { gte: filters.minLevel };

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      prisma.equipment.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      equipment,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getEquipmentById(id: number) {
    const equipment = await prisma.equipment.findUnique({
      where: { id },
    });

    if (!equipment) {
      throw new Error('Equipment not found');
    }

    return equipment;
  }

  async getEquipmentByType(type: EquipmentType, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { type },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      prisma.equipment.count({ where: { type } }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      equipment,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getEquipmentByRarity(rarity: Rarity, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { rarity },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      prisma.equipment.count({ where: { rarity } }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      equipment,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }
}
