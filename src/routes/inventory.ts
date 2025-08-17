import { Router, type Response } from 'express';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import { validateCharacterIdParam, validateItemIdParam } from '../middleware/validation';

const router = Router();

// Get character inventory
router.get(
  '/:characterId',
  authenticateToken,
  validateCharacterIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { characterId } = req.params;

      // Check if character belongs to user
      const character = await prisma.character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      const inventory = await prisma.characterInventory.findMany({
        where: { characterId },
        include: {
          item: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.json({
        success: true,
        data: inventory,
      });
    } catch (error) {
      console.error('Get inventory error:', error);

      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Add item to inventory
router.post(
  '/:characterId/items',
  authenticateToken,
  validateCharacterIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { characterId } = req.params;
      const { itemId, quantity = 1 } = req.body;

      // Check if character belongs to user
      const character = await prisma.character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      // Check if item exists
      const item = await prisma.item.findUnique({
        where: { id: itemId },
      });

      if (!item) {
        return res.status(404).json({
          success: false,
          error: 'Item not found',
        });
      }

      // Check if item already exists in inventory
      const existingItem = await prisma.characterInventory.findFirst({
        where: {
          characterId,
          itemId,
        },
      });

      if (existingItem) {
        // Update quantity
        const updatedItem = await prisma.characterInventory.update({
          where: { id: existingItem.id },
          data: { quantity: existingItem.quantity + quantity },
          include: { item: true },
        });

        return res.json({
          success: true,
          data: updatedItem,
          message: 'Item quantity updated',
        });
      } else {
        // Add new item
        const newItem = await prisma.characterInventory.create({
          data: {
            characterId,
            itemId,
            quantity,
          },
          include: { item: true },
        });

        return res.status(201).json({
          success: true,
          data: newItem,
          message: 'Item added to inventory',
        });
      }
    } catch (error) {
      console.error('Add item error:', error);

      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Update item quantity in inventory
router.put(
  '/:characterId/items/:itemId',
  authenticateToken,
  validateCharacterIdParam,
  validateItemIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { characterId, itemId } = req.params;
      const { quantity } = req.body;

      // Check if character belongs to user
      const character = await prisma.character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      // Find inventory item
      const inventoryItem = await prisma.characterInventory.findFirst({
        where: {
          characterId,
          itemId: Number(itemId),
        },
      });

      if (!inventoryItem) {
        return res.status(404).json({
          success: false,
          error: 'Item not found in inventory',
        });
      }

      if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        await prisma.characterInventory.delete({
          where: { id: inventoryItem.id },
        });

        return res.json({
          success: true,
          message: 'Item removed from inventory',
        });
      } else {
        // Update quantity
        const updatedItem = await prisma.characterInventory.update({
          where: { id: inventoryItem.id },
          data: { quantity },
          include: { item: true },
        });

        return res.json({
          success: true,
          data: updatedItem,
          message: 'Item quantity updated',
        });
      }
    } catch (error) {
      console.error('Update item error:', error);

      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

// Remove item from inventory
router.delete(
  '/:characterId/items/:itemId',
  authenticateToken,
  validateCharacterIdParam,
  validateItemIdParam,
  async (req: AuthRequest, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated',
        });
      }

      const { characterId, itemId } = req.params;

      // Check if character belongs to user
      const character = await prisma.character.findUnique({
        where: { id: characterId },
      });

      if (!character) {
        return res.status(404).json({
          success: false,
          error: 'Character not found',
        });
      }

      if (character.userId !== req.user.userId) {
        return res.status(403).json({
          success: false,
          error: 'Character does not belong to user',
        });
      }

      // Find and delete inventory item
      const inventoryItem = await prisma.characterInventory.findFirst({
        where: {
          characterId,
          itemId: Number(itemId),
        },
      });

      if (!inventoryItem) {
        return res.status(404).json({
          success: false,
          error: 'Item not found in inventory',
        });
      }

      await prisma.characterInventory.delete({
        where: { id: inventoryItem.id },
      });

      return res.json({
        success: true,
        message: 'Item removed from inventory',
      });
    } catch (error) {
      console.error('Remove item error:', error);

      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }
);

export default router;
