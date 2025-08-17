import { Router, type Request, type Response } from 'express';
import { ExperienceController } from '../controllers/experienceController';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import { validateIdParam } from '../middleware/validation';

const router = Router();
const experienceController = new ExperienceController();

// Get all experience levels with pagination
router.get('/', (req: Request, res: Response) =>
  experienceController.getExperienceLevels(req, res)
);

// Get experience level by level number
router.get('/:id', validateIdParam, (req: Request, res: Response) =>
  experienceController.getExperienceLevelByLevel(req, res)
);

// Create new experience level (admin only)
router.post('/', authenticateToken, (req: AuthRequest, res: Response) =>
  experienceController.createExperienceLevel(req, res)
);

// Update experience level (admin only)
router.put('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  experienceController.updateExperienceLevel(req, res)
);

// Delete experience level (admin only)
router.delete('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  experienceController.deleteExperienceLevel(req, res)
);

// Bulk create experience levels (admin only)
router.post('/bulk', authenticateToken, (req: AuthRequest, res: Response) =>
  experienceController.bulkCreateExperienceLevels(req, res)
);

// Get experience required for next level
router.get('/next/:currentExp', (req: Request, res: Response) =>
  experienceController.getNextLevelInfo(req, res)
);

export default router;
