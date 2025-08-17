import { Router, type Request, type Response } from 'express';
import { prisma } from '../database/prisma';
import { validateNumericIdParam, validatePagination } from '../middleware/validation';

const router = Router();

// Get all maps with optional filtering
router.get('/', validatePagination, async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 20, difficulty, minLevel, maxLevel } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};

    if (difficulty) where.difficulty = difficulty;
    if (minLevel) where.minLevel = { gte: Number(minLevel) };
    if (maxLevel) where.maxLevel = { lte: Number(maxLevel) };

    const [maps, total] = await Promise.all([
      prisma.gameMap.findMany({
        where,
        include: {
          _count: {
            select: { monsters: true },
          },
        },
        skip,
        take: Number(limit),
        orderBy: { minLevel: 'asc' },
      }),
      prisma.gameMap.count({ where }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: maps,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get maps error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get map by ID
router.get('/:id', validateNumericIdParam, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const map = await prisma.gameMap.findUnique({
      where: { id: Number(id) },
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
      return res.status(404).json({
        success: false,
        error: 'Map not found',
      });
    }

    res.json({
      success: true,
      data: map,
    });
  } catch (error) {
    console.error('Get map error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get maps by difficulty
router.get('/difficulty/:difficulty', validatePagination, async (req: Request, res: Response) => {
  try {
    const { difficulty } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [maps, total] = await Promise.all([
      prisma.gameMap.findMany({
        where: { difficulty: difficulty as any },
        include: {
          _count: {
            select: { monsters: true },
          },
        },
        skip,
        take: Number(limit),
        orderBy: { minLevel: 'asc' },
      }),
      prisma.gameMap.count({ where: { difficulty: difficulty as any } }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: maps,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get maps by difficulty error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get maps by level range
router.get('/level/:minLevel', validatePagination, async (req: Request, res: Response) => {
  try {
    const { minLevel } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [maps, total] = await Promise.all([
      prisma.gameMap.findMany({
        where: {
          minLevel: { lte: Number(minLevel) },
          maxLevel: { gte: Number(minLevel) },
        },
        include: {
          _count: {
            select: { monsters: true },
          },
        },
        skip,
        take: Number(limit),
        orderBy: { minLevel: 'asc' },
      }),
      prisma.gameMap.count({
        where: {
          minLevel: { lte: Number(minLevel) },
          maxLevel: { gte: Number(minLevel) },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: maps,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get maps by level error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
