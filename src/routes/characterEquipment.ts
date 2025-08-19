import { Router, type Request, type Response } from 'express';
import { CharacterEquipmentController } from '~/controllers/characterEquipmentController';
import { authenticateToken } from '~/middleware/auth';
import { validateCharacterIdParam, validateEquipmentIdParam } from '~/middleware/validation';

const router = Router();
const characterEquipmentController = new CharacterEquipmentController();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Get character's equipment
router.get('/:characterId', validateCharacterIdParam, (req: Request, res: Response) =>
  characterEquipmentController.getCharacterEquipment(req, res)
);

// Equip an item
router.post(
  '/:characterId/equip/:equipmentId',
  validateCharacterIdParam,
  validateEquipmentIdParam,
  (req: Request, res: Response) => characterEquipmentController.equipItem(req, res)
);

// Unequip an item
router.post(
  '/:characterId/unequip/:equipmentId',
  validateCharacterIdParam,
  validateEquipmentIdParam,
  (req: Request, res: Response) => characterEquipmentController.unequipItem(req, res)
);

// Sell equipment
router.delete(
  '/:characterId/sell/:equipmentId',
  validateCharacterIdParam,
  validateEquipmentIdParam,
  (req: Request, res: Response) => characterEquipmentController.sellEquipment(req, res)
);

export default router;
