import type { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';

export function handleValidationErrors(req: Request, res: Response, next: NextFunction): void {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors.array(),
    });

    return;
  }

  next();
}

// User validation rules
export const validateUserRegistration = [
  body('username')
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email').isEmail().withMessage('Must be a valid email address').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  handleValidationErrors,
];

export const validateUserLogin = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

// Character validation rules
export const validateCharacterCreation = [
  body('name')
    .isLength({ min: 2, max: 100 })
    .withMessage('Character name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage('Character name can only contain letters, numbers, and spaces'),
  body('job_id').isInt({ min: 1 }).withMessage('Job ID must be a positive integer'),
  handleValidationErrors,
];

export const validateStatAllocation = [
  body('health_points')
    .isInt({ min: 0 })
    .withMessage('Health points must be a non-negative integer'),
  body('attack_points')
    .isInt({ min: 0 })
    .withMessage('Attack points must be a non-negative integer'),
  body('defense_points')
    .isInt({ min: 0 })
    .withMessage('Defense points must be a non-negative integer'),
  body('speed_points').isInt({ min: 0 }).withMessage('Speed points must be a non-negative integer'),
  body('critical_points')
    .isInt({ min: 0 })
    .withMessage('Critical points must be a non-negative integer'),
  handleValidationErrors,
];

// Equipment validation rules
export const validateEquipmentEquip = [
  param('equipmentId').isUUID().withMessage('Equipment ID must be a valid UUID'),
  handleValidationErrors,
];

// Battle validation rules
export const validateBattleRequest = [
  body('character_id').isUUID().withMessage('Character ID must be a valid UUID'),
  body('monster_id').isInt({ min: 1 }).withMessage('Monster ID must be a positive integer'),
  handleValidationErrors,
];

// Pagination validation rules
export const validatePagination = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  handleValidationErrors,
];

// ID parameter validation
export const validateIdParam = [
  param('id').isUUID().withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateNumericIdParam = [
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  handleValidationErrors,
];

// Character ID validation (for inventory routes)
export const validateCharacterIdParam = [
  param('characterId').isUUID().withMessage('Character ID must be a valid UUID'),
  handleValidationErrors,
];

// Item ID validation (for inventory routes)
export const validateItemIdParam = [
  param('itemId').isInt({ min: 1 }).withMessage('Item ID must be a positive integer'),
  handleValidationErrors,
];
