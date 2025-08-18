import { Router, type Request, type Response } from 'express';
import { JobClassesController } from '~/controllers/jobClassesController';
import { validateNumericIdParam, validatePagination } from '~/middleware/validation';

const router = Router();
const jobClassesController = new JobClassesController();

// Get all job classes with pagination
router.get('/', validatePagination, (req: Request, res: Response) =>
  jobClassesController.getJobClasses(req, res)
);

// Get job class by ID
router.get('/id/:id', validateNumericIdParam, (req: Request, res: Response) =>
  jobClassesController.getJobClassById(req, res)
);

// Get job class by name
router.get('/name/:name', (req: Request, res: Response) =>
  jobClassesController.getJobClassByName(req, res)
);

export default router;
