import { Router, type Request, type Response } from 'express';
import { prisma } from '../database/prisma';
import { validateNumericIdParam, validatePagination } from '../middleware/validation';

const router = Router();

// Get all equipment with optional filtering
router.get('/', validatePagination, async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 20, type, rarity, minLevel } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};

    if (type) where.type = type;
    if (rarity) where.rarity = rarity;
    if (minLevel) where.minLevel = { gte: Number(minLevel) };

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.equipment.count({ where }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: equipment,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get equipment error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get equipment by ID
router.get('/:id', validateNumericIdParam, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const equipment = await prisma.equipment.findUnique({
      where: { id: Number(id) },
    });

    if (!equipment) {
      return res.status(404).json({
        success: false,
        error: 'Equipment not found',
      });
    }

    res.json({
      success: true,
      data: equipment,
    });
  } catch (error) {
    console.error('Get equipment error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get equipment by type
router.get('/type/:type', validatePagination, async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { type: type as any },
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.equipment.count({ where: { type: type as any } }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: equipment,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get equipment by type error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get equipment by rarity
router.get('/rarity/:rarity', validatePagination, async (req: Request, res: Response) => {
  try {
    const { rarity } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where: { rarity: rarity as any },
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.equipment.count({ where: { rarity: rarity as any } }),
    ]);

    const totalPages = Math.ceil(total / Number(limit));

    res.json({
      success: true,
      data: equipment,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Get equipment by rarity error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
