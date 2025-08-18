import { Router, type Request, type Response } from 'express';
import { MapZonesController } from '~/controllers/mapZonesController';
import { validateNumericIdParam, validatePagination } from '~/middleware/validation';

const router = Router();
const mapZonesController = new MapZonesController();

// Get all map zones with optional filtering
router.get('/', validatePagination, (req: Request, res: Response) =>
  mapZonesController.getMapZones(req, res)
);

// Get map zone by ID
router.get('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  mapZonesController.getMapZoneById(req, res)
);

// Create new map zone
router.post('/', (req: Request, res: Response) => mapZonesController.createMapZone(req, res));

// Update map zone
router.put('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  mapZonesController.updateMapZone(req, res)
);

// Delete map zone
router.delete('/:id', validateNumericIdParam, (req: Request, res: Response) =>
  mapZonesController.deleteMapZone(req, res)
);

// Get map zones by map ID
router.get('/map/:mapId', validateNumericIdParam, (req: Request, res: Response) =>
  mapZonesController.getMapZonesByMapId(req, res)
);

export default router;
