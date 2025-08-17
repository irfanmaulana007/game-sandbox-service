import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const authController = new AuthController();

// Register new user
router.post('/register', (req, res) => authController.register(req, res));

// Login user
router.post('/login', (req, res) => authController.login(req, res));

// Get current user info
router.get('/me', authenticateToken, (req, res) => authController.getCurrentUser(req, res));

// Logout (client-side token removal)
router.post('/logout', authenticateToken, (req, res) => authController.logout(req, res));

export default router;
