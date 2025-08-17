import { Router, type Response } from 'express';
import { authenticateToken, type AuthRequest } from '../middleware/auth';
import {
  getPaginationParams,
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendForbidden,
  sendInternalError,
  sendNoContent,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
  sendValidationError,
} from '../utils/response';

const router = Router();

// Example: GET with pagination
router.get('/items', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { page, limit } = getPaginationParams(req.query);

    // Simulate database query with pagination
    const mockItems = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
      userId: req.user!.userId,
    }));

    const total = mockItems.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = mockItems.slice(startIndex, endIndex);

    sendSuccessWithPagination(res, paginatedItems, total, page, limit);
  } catch (error) {
    console.error('Get items error:', error);
    sendInternalError(res, 'Failed to retrieve items');
  }
});

// Example: GET single item
router.get('/items/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { id } = req.params;
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      return sendBadRequest(res, 'Invalid item ID');
    }

    // Simulate database query
    const mockItem = {
      id: itemId,
      name: `Item ${itemId}`,
      description: `Description for item ${itemId}`,
      userId: req.user.userId,
    };

    if (itemId > 100) {
      return sendNotFound(res, 'Item not found');
    }

    sendSuccess(res, mockItem, 'Item retrieved successfully');
  } catch (error) {
    console.error('Get item error:', error);
    sendInternalError(res, 'Failed to retrieve item');
  }
});

// Example: POST with validation
router.post('/items', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { name, description } = req.body;

    // Validation
    if (!name || typeof name !== 'string') {
      return sendValidationError(res, 'Name is required and must be a string', {
        field: 'name',
        value: name,
      });
    }

    if (name.length < 3) {
      return sendValidationError(res, 'Name must be at least 3 characters long', {
        field: 'name',
        value: name,
        minLength: 3,
      });
    }

    if (description && typeof description !== 'string') {
      return sendValidationError(res, 'Description must be a string', {
        field: 'description',
        value: description,
      });
    }

    // Simulate duplicate check
    if (name.toLowerCase().includes('duplicate')) {
      return sendConflict(res, 'Item with this name already exists');
    }

    // Simulate item creation
    const newItem = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      description: description || '',
      userId: req.user.userId,
      createdAt: new Date(),
    };

    sendCreated(res, newItem, 'Item created successfully');
  } catch (error) {
    console.error('Create item error:', error);
    sendInternalError(res, 'Failed to create item');
  }
});

// Example: PUT with different scenarios
router.put('/items/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { id } = req.params;
    const { name, description } = req.body;
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      return sendBadRequest(res, 'Invalid item ID');
    }

    // Simulate item not found
    if (itemId > 100) {
      return sendNotFound(res, 'Item not found');
    }

    // Simulate forbidden access (item belongs to different user)
    if (itemId % 10 === 0) {
      return sendForbidden(res, 'You do not have permission to modify this item');
    }

    // Simulate validation error
    if (name && name.length < 2) {
      return sendValidationError(res, 'Name must be at least 2 characters long', {
        field: 'name',
        value: name,
        minLength: 2,
      });
    }

    // Simulate successful update
    const updatedItem = {
      id: itemId,
      name: name || `Item ${itemId}`,
      description: description || `Description for item ${itemId}`,
      userId: req.user.userId,
      updatedAt: new Date(),
    };

    sendSuccess(res, updatedItem, 'Item updated successfully');
  } catch (error) {
    console.error('Update item error:', error);
    sendInternalError(res, 'Failed to update item');
  }
});

// Example: DELETE with no content response
router.delete('/items/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return sendUnauthorized(res, 'User not authenticated');
    }

    const { id } = req.params;
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      return sendBadRequest(res, 'Invalid item ID');
    }

    // Simulate item not found
    if (itemId > 100) {
      return sendNotFound(res, 'Item not found');
    }

    // Simulate forbidden access
    if (itemId % 7 === 0) {
      return sendForbidden(res, 'You do not have permission to delete this item');
    }

    // Simulate successful deletion
    // In real implementation, you would delete from database here

    sendNoContent(res);
  } catch (error) {
    console.error('Delete item error:', error);
    sendInternalError(res, 'Failed to delete item');
  }
});

// Example: Custom error with data
router.get('/error-examples', (req, res) => {
  const errorType = req.query.type as string;

  switch (errorType) {
    case 'bad-request':
      return sendBadRequest(res, 'This is a bad request example', {
        example: true,
        timestamp: new Date().toISOString(),
      });

    case 'validation':
      return sendValidationError(res, 'Multiple validation errors occurred', {
        errors: [
          { field: 'email', message: 'Invalid email format' },
          { field: 'password', message: 'Password too short' },
        ],
      });

    case 'conflict':
      return sendConflict(res, 'Resource conflict detected', {
        conflictingField: 'email',
        existingValue: 'user@example.com',
      });

    case 'internal':
      return sendInternalError(res, 'Something went wrong internally', {
        errorCode: 'DB_CONNECTION_FAILED',
        retryAfter: 30,
      });

    default:
      return sendBadRequest(
        res,
        'Invalid error type. Use: bad-request, validation, conflict, or internal'
      );
  }
});

export default router;
