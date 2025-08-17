import { prisma } from '../database/prisma';

export class EquipmentService {
  async getEquipment(
    page: number,
    limit: number,
    filters: { type?: string; rarity?: string; minLevel?: number }
  ) {
    const skip = (page - 1) * limit;
    const where: any = {};

    if (filters.type) where.type = filters.type;
    if (filters.rarity) where.rarity = filters.rarity;
    if (filters.minLevel) where.minLevel = { gte: filters.minLevel };

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
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

  async getEquipmentByType(type: string, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { type: type as any },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.equipment.count({ where: { type: type as any } }),
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

  async getEquipmentByRarity(rarity: string, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { rarity: rarity as any },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.equipment.count({ where: { rarity: rarity as any } }),
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
