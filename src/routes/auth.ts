import bcrypt from 'bcryptjs';
import { Router, type Request, type Response } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../database/prisma';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import type { CreateUserRequest, JwtPayload, LoginRequest } from '../types';

const router = Router();

// Register new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password }: CreateUserRequest = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'Username or email already exists',
      });
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      success: true,
      data: newUser,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Registration error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password }: LoginRequest = req.body;

    // Find user
    const userData = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        passwordHash: true,
      },
    });

    if (!userData) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, userData.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
    }

    // Generate JWT token
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }

    const payload: JwtPayload = {
      userId: userData.id,
      username: userData.username,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 hours
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    } as any);

    return res.json({
      success: true,
      data: {
        user: {
          id: userData.id,
          username: userData.username,
          email: userData.email,
        },
        token,
      },
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Login error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Get current user info
router.get('/me', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Get user error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Logout (client-side token removal)
router.post('/logout', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    // In a stateless JWT system, logout is handled client-side
    // You could implement a blacklist here if needed
    return res.json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

export default router;
