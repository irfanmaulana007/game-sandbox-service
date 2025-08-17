import { Router, type Response } from 'express';
import { BattleController } from '../controllers/battleController';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import { validateBattleRequest, validateIdParam } from '../middleware/validation';

const router = Router();
const battleController = new BattleController();

// Start a battle
router.post('/start', authenticateToken, validateBattleRequest, (req: AuthRequest, res: Response) =>
  battleController.startBattle(req, res)
);

// Get battle by ID
router.get('/:id', authenticateToken, validateIdParam, (req: AuthRequest, res: Response) =>
  battleController.getBattleById(req, res)
);

// Get battles for a character
router.get(
  '/character/:characterId',
  authenticateToken,
  validateIdParam,
  (req: AuthRequest, res: Response) => battleController.getBattlesForCharacter(req, res)
);

export default router;
