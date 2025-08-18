import type { Prisma } from '@prisma/client';
import { prisma } from '~/database/prisma';

export class MapZonesService {
  async getMapZones(page: number, limit: number, filters: { mapId?: number }) {
    const skip = (page - 1) * limit;
    const where: Prisma.GameMapZoneWhereInput = {};

    if (filters.mapId) where.map_id = filters.mapId;

    const [mapZones, total] = await Promise.all([
      prisma.gameMapZone.findMany({
        where,
        include: {
          map: true,
          _count: {
            select: { monsters_details: true },
          },
        },
        skip,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      prisma.gameMapZone.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      mapZones,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getMapZoneById(id: number) {
    const mapZone = await prisma.gameMapZone.findUnique({
      where: { id },
      include: {
        map: true,
        monsters_details: {
          include: {
            monsters: true,
          },
        },
      },
    });

    if (!mapZone) {
      throw new Error('Map zone not found');
    }

    return mapZone;
  }

  async createMapZone(data: { map_id: number; name: string; description?: string }) {
    // Verify that the map exists
    const map = await prisma.gameMap.findUnique({
      where: { id: data.map_id },
    });

    if (!map) {
      throw new Error('Map not found');
    }

    const mapZone = await prisma.gameMapZone.create({
      data: {
        map_id: data.map_id,
        name: data.name,
        description: data.description,
      },
      include: {
        map: true,
      },
    });

    return mapZone;
  }

  async updateMapZone(id: number, data: { name?: string; description?: string }) {
    const mapZone = await prisma.gameMapZone.findUnique({
      where: { id },
    });

    if (!mapZone) {
      throw new Error('Map zone not found');
    }

    const updatedMapZone = await prisma.gameMapZone.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
      },
      include: {
        map: true,
      },
    });

    return updatedMapZone;
  }

  async deleteMapZone(id: number) {
    const mapZone = await prisma.gameMapZone.findUnique({
      where: { id },
    });

    if (!mapZone) {
      throw new Error('Map zone not found');
    }

    await prisma.gameMapZone.delete({
      where: { id },
    });

    return { message: 'Map zone deleted successfully' };
  }

  async getMapZonesByMapId(mapId: number) {
    const mapZones = await prisma.gameMapZone.findMany({
      where: { map_id: mapId },
      include: {
        _count: {
          select: { monsters_details: true },
        },
      },
      orderBy: { id: 'asc' },
    });

    return mapZones;
  }
}
