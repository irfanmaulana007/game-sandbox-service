import { type Request, type Response } from 'express';
import { type AuthRequest } from '../middleware/auth';
import { AuthService } from '../services/authService';
import {
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendUnauthorized,
} from '../utils/response';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response) {
    try {
      const newUser = await this.authService.registerUser(req.body);
      return sendCreated(res, newUser, 'User registered successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Username or email already exists') {
        return res.status(400).json({
          success: false,
          error: error.message,
        });
      }
      console.error('Registration error:', error);
      return sendInternalError(res, 'Internal server error');
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = await this.authService.loginUser(req.body);
      return sendSuccess(res, result, 'Login successful');
    } catch (error) {
      if (error instanceof Error && error.message === 'Invalid credentials') {
        return res.status(401).json({
          success: false,
          error: error.message,
        });
      }
      console.error('Login error:', error);
      return sendInternalError(res, 'Internal server error');
    }
  }

  async getCurrentUser(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const user = await this.authService.getCurrentUser(req.user.userId);
      return sendSuccess(res, user);
    } catch (error) {
      if (error instanceof Error && error.message === 'User not found') {
        return sendNotFound(res, 'User not found');
      }
      console.error('Get user error:', error);
      return sendInternalError(res, 'Internal server error');
    }
  }

  async logout(req: AuthRequest, res: Response) {
    try {
      // In a stateless JWT system, logout is handled client-side
      // You could implement a blacklist here if needed
      return sendSuccess(res, null, 'Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      return sendInternalError(res, 'Internal server error');
    }
  }
}
