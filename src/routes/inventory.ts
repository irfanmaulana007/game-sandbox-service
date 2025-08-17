import { Router, type Response } from 'express';
import { InventoryController } from '~/controllers/inventoryController';
import { authenticateToken, type AuthRequest } from '~/middleware/auth';
import { validateCharacterIdParam, validateItemIdParam } from '~/middleware/validation';

const router = Router();
const inventoryController = new InventoryController();

// Get character inventory
router.get(
  '/:characterId',
  authenticateToken,
  validateCharacterIdParam,
  (req: AuthRequest, res: Response) => inventoryController.getCharacterInventory(req, res)
);

// Add item to inventory
router.post(
  '/:characterId/items',
  authenticateToken,
  validateCharacterIdParam,
  (req: AuthRequest, res: Response) => inventoryController.addItemToInventory(req, res)
);

// Update item quantity in inventory
router.put(
  '/:characterId/items/:itemId',
  authenticateToken,
  validateCharacterIdParam,
  validateItemIdParam,
  (req: AuthRequest, res: Response) => inventoryController.updateItemQuantity(req, res)
);

// Remove item from inventory
router.delete(
  '/:characterId/items/:itemId',
  authenticateToken,
  validateCharacterIdParam,
  validateItemIdParam,
  (req: AuthRequest, res: Response) => inventoryController.removeItemFromInventory(req, res)
);

export default router;
