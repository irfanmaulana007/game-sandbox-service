import { Router, type Request, type Response } from 'express';
import { prisma } from '../database/prisma';
import { validateNumericIdParam, validatePagination } from '../middleware/validation';

const router = Router();

// Get all monsters with optional filtering
router.get('/', validatePagination, async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 20, level, mapId, rank } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};

    if (level) where.level = Number(level);
    if (mapId) where.mapId = Number(mapId);
    if (rank) {
      where.details = { rank: rank as any };
    }

    const [monsters, total] = await Promise.all([
      prisma.monster.findMany({
        where,
        include: {
          details: true,
          map: true,
        },
        skip,
        take: Number(limit),
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({ where }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: monsters,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get monsters error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get monster by ID
router.get('/:id', validateNumericIdParam, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const monster = await prisma.monster.findUnique({
      where: { id: Number(id) },
      include: {
        details: true,
        map: true,
      },
    });

    if (!monster) {
      return res.status(404).json({
        success: false,
        error: 'Monster not found',
      });
    }

    res.json({
      success: true,
      data: monster,
    });
  } catch (error) {
    console.error('Get monster error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get monsters by map
router.get(
  '/map/:mapId',
  validateNumericIdParam,
  validatePagination,
  async (req: Request, res: Response) => {
    try {
      const { mapId } = req.params;
      const { page = 1, limit = 20 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const [monsters, total] = await Promise.all([
        prisma.monster.findMany({
          where: { mapId: Number(mapId) },
          include: {
            details: true,
          },
          skip,
          take: Number(limit),
          orderBy: { level: 'asc' },
        }),
        prisma.monster.count({ where: { mapId: Number(mapId) } }),
      ]);

      const totalPages = Math.ceil(total / Number(limit));

      res.json({
        success: true,
        data: monsters,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          totalPages,
        },
      });
    } catch (error) {
      console.error('Get monsters by map error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Get monsters by rank
router.get('/rank/:rank', validatePagination, async (req: Request, res: Response) => {
  try {
    const { rank } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

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
        take: Number(limit),
        orderBy: { level: 'asc' },
      }),
      prisma.monster.count({
        where: {
          details: { rank: rank as any },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: monsters,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get monsters by rank error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
