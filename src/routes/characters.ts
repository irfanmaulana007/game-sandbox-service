import { Router, type Response } from 'express';
import { CharacterController } from '~/controllers/characterController';
import { authenticateToken, type AuthRequest } from '~/middleware/auth';
import {
  validateCharacterCreation,
  validateIdParam,
  validateStatAllocation,
} from '~/middleware/validation';

const router = Router();
const characterController = new CharacterController();

// Get all characters for the authenticated user
router.get('/', authenticateToken, (req: AuthRequest, res: Response) =>
  characterController.getCharacters(req, res)
);

// Get my character (single character for authenticated user)
router.get('/me', authenticateToken, (req: AuthRequest, res: Response) =>
  characterController.getMyCharacter(req, res)
);

// Create new character
router.post('/', authenticateToken, validateCharacterCreation, (req: AuthRequest, res: Response) =>
  characterController.createCharacter(req, res)
);

// Get character by ID
router.get('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  characterController.getCharacterById(req, res)
);

// Update character
router.put('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  characterController.updateCharacter(req, res)
);

// Delete character
router.delete('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  characterController.deleteCharacter(req, res)
);

// Allocate status points
router.post(
  '/:id/allocate-stats',
  authenticateToken,
  validateIdParam,
  validateStatAllocation,
  (req: AuthRequest, res: Response) => characterController.allocateStats(req, res)
);

export default router;
