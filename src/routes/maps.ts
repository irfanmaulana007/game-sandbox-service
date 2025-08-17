import { Router, type Request, type Response } from 'express';
import { MapsController } from '../controllers/mapsController';
import { validateNumericIdParam, validatePagination } from '../middleware/validation';

const router = Router();
const mapsController = new MapsController();

// Get all maps with optional filtering
router.get('/', validatePagination, (req: Request, res: Response) =>
  mapsController.getMaps(req, res)
);

// Get map by ID
router.get('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  mapsController.getMapById(req, res)
);

// Get maps by difficulty
router.get('/difficulty/:difficulty', validatePagination, (req: Request, res: Response) =>
  mapsController.getMapsByDifficulty(req, res)
);

// Get maps by level range
router.get('/level/:minLevel', validatePagination, (req: Request, res: Response) =>
  mapsController.getMapsByLevelRange(req, res)
);

export default router;
