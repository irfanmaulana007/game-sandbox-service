import { Router, type Request, type Response } from 'express';
import { CharacterEquippedItemController } from '~/controllers/characterEquippedItemController';
import { authenticateToken } from '~/middleware/auth';
import {
  validateActualEquipmentIdParam,
  validateCharacterIdParam,
  validateSlotParam,
} from '~/middleware/validation';

const router = Router();
const characterEquippedItemController = new CharacterEquippedItemController();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Get all equipped items for a character
router.get('/:characterId', validateCharacterIdParam, (req: Request, res: Response) =>
  characterEquippedItemController.getEquippedItems(req, res)
);

// Get equipped item in a specific slot
router.get(
  '/:characterId/slot/:slot',
  validateCharacterIdParam,
  validateSlotParam,
  (req: Request, res: Response) => characterEquippedItemController.getEquippedItemBySlot(req, res)
);

// Equip an item to a specific slot
router.post(
  '/:characterId/equip/:equipmentId/:slot',
  validateCharacterIdParam,
  validateActualEquipmentIdParam,
  validateSlotParam,
  (req: Request, res: Response) => characterEquippedItemController.equipItem(req, res)
);

// Unequip an item by equipped item ID
router.delete(
  '/:characterId/unequip/:equippedItemId',
  validateCharacterIdParam,
  (req: Request, res: Response) => characterEquippedItemController.unequipItem(req, res)
);

// Unequip an item by slot
router.delete(
  '/:characterId/unequip-slot/:slot',
  validateCharacterIdParam,
  validateSlotParam,
  (req: Request, res: Response) => characterEquippedItemController.unequipItemBySlot(req, res)
);

// Swap equipment (unequip existing and equip new)
router.put(
  '/:characterId/swap/:equipmentId/:slot',
  validateCharacterIdParam,
  validateActualEquipmentIdParam,
  validateSlotParam,
  (req: Request, res: Response) => characterEquippedItemController.swapEquipment(req, res)
);

export default router;
