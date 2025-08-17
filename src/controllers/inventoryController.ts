import { type Response } from 'express';
import { type AuthRequest } from '~/middleware/auth';
import { InventoryService } from '~/services/inventoryService';
import {
  sendCreated,
  sendForbidden,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendUnauthorized,
} from '~/utils/response';

export class InventoryController {
  private inventoryService: InventoryService;

  constructor() {
    this.inventoryService = new InventoryService();
  }

  async getCharacterInventory(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { characterId } = req.params;
      const inventory = await this.inventoryService.getCharacterInventory(
        characterId,
        req.user.userId
      );

      return sendSuccess(res, inventory);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }
      }

      console.error('Get inventory error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async addItemToInventory(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { characterId } = req.params;
      const { itemId, quantity = 1 } = req.body;

      const result = await this.inventoryService.addItemToInventory(
        characterId,
        req.user.userId,
        itemId,
        quantity
      );

      if (result.isUpdate) {
        return sendSuccess(res, result.item, result.message);
      } else {
        return sendCreated(res, result.item, result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }

        if (error.message === 'Item not found') {
          return sendNotFound(res, error.message);
        }
      }

      console.error('Add item error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async updateItemQuantity(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { characterId, itemId } = req.params;
      const { quantity } = req.body;

      const result = await this.inventoryService.updateItemQuantity(
        characterId,
        req.user.userId,
        itemId,
        quantity
      );

      if (result.removed) {
        return sendSuccess(res, null, result.message);
      } else {
        return sendSuccess(res, result.item, result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }

        if (error.message === 'Item not found in inventory') {
          return sendNotFound(res, error.message);
        }
      }

      console.error('Update item error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async removeItemFromInventory(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { characterId, itemId } = req.params;

      await this.inventoryService.removeItemFromInventory(characterId, req.user.userId, itemId);

      return sendSuccess(res, null, 'Item removed from inventory');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }

        if (error.message === 'Item not found in inventory') {
          return sendNotFound(res, error.message);
        }
      }

      console.error('Remove item error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
