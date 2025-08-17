import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from '../types';

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    res.status(401).json({
      success: false,
      error: 'Access token required',
    });

    return;
  }

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({
        success: false,
        error: 'Invalid or expired token',
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Token verification failed',
      });
    }
  }
}

export function optionalAuth(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const secret = process.env.JWT_SECRET;

      if (secret) {
        const decoded = jwt.verify(token, secret) as JwtPayload;

        req.user = decoded;
      }
    } catch (error) {
      console.error('Optional auth error:', error);
      // Silently fail for optional auth
    }
  }

  next();
}

export function requireRole(roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: 'Authentication required',
      });

      return;
    }

    // For now, we'll implement basic role checking
    // You can extend this based on your role system
    if (roles.length > 0) {
      // Add role checking logic here when you implement roles
      next();
    } else {
      next();
    }
  };
}
