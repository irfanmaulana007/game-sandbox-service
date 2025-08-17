import { Router, type Request, type Response } from 'express';
import { MonstersController } from '../controllers/monstersController';
import { validateNumericIdParam, validatePagination } from '../middleware/validation';

const router = Router();
const monstersController = new MonstersController();

// Get all monsters with optional filtering
router.get('/', validatePagination, (req: Request, res: Response) =>
  monstersController.getMonsters(req, res)
);

// Get monster by ID
router.get('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  monstersController.getMonsterById(req, res)
);

// Get monsters by map
router.get(
  '/map/:mapId',
  validateNumericIdParam,
  validatePagination,
  (req: Request, res: Response) => monstersController.getMonstersByMap(req, res)
);

// Get monsters by rank
router.get('/rank/:rank', validatePagination, (req: Request, res: Response) =>
  monstersController.getMonstersByRank(req, res)
);

export default router;
