import { Router, type Request, type Response } from 'express';
import { EquipmentController } from '~/controllers/equipmentController';
import { validateNumericIdParam, validatePagination } from '~/middleware/validation';

const router = Router();
const equipmentController = new EquipmentController();

// Get all equipment with optional filtering
router.get('/', validatePagination, (req: Request, res: Response) =>
  equipmentController.getEquipment(req, res)
);

// Get equipment by ID
router.get('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  equipmentController.getEquipmentById(req, res)
);

// Get equipment by type
router.get('/type/:type', validatePagination, (req: Request, res: Response) =>
  equipmentController.getEquipmentByType(req, res)
);

// Get equipment by rarity
router.get('/rarity/:rarity', validatePagination, (req: Request, res: Response) =>
  equipmentController.getEquipmentByRarity(req, res)
);

export default router;
