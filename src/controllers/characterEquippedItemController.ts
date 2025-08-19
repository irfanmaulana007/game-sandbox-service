import type { Response } from 'express';
import { CharacterEquippedItemService } from '~/services/characterEquippedItemService';
import type { AuthenticatedRequest } from '~/types';
import { sendError, sendSuccess } from '~/utils/response';

const characterEquippedItemService = new CharacterEquippedItemService();

export class CharacterEquippedItemController {
  async getEquippedItems(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const equippedItems = await characterEquippedItemService.getEquippedItems(
        characterId,
        userId
      );

      return sendSuccess(res, equippedItems, 'Equipped items retrieved successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get equipped items';

      return sendError(res, errorMessage, 400);
    }
  }

  async getEquippedItemBySlot(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, slot } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const equippedItem = await characterEquippedItemService.getEquippedItemBySlot(
        characterId,
        slot as any,
        userId
      );

      return sendSuccess(res, equippedItem, 'Equipped item retrieved successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get equipped item';

      return sendError(res, errorMessage, 400);
    }
  }

  async equipItem(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, equipmentId, slot } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const equippedItem = await characterEquippedItemService.equipItem(
        characterId,
        equipmentId,
        slot as any,
        userId
      );

      return sendSuccess(res, equippedItem, 'Item equipped successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to equip item';

      return sendError(res, errorMessage, 400);
    }
  }

  async unequipItem(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, equippedItemId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const result = await characterEquippedItemService.unequipItem(
        characterId,
        equippedItemId,
        userId
      );

      return sendSuccess(res, result, 'Item unequipped successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to unequip item';

      return sendError(res, errorMessage, 400);
    }
  }

  async unequipItemBySlot(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, slot } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const result = await characterEquippedItemService.unequipItemBySlot(
        characterId,
        slot as any,
        userId
      );

      return sendSuccess(res, result, 'Item unequipped successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to unequip item';

      return sendError(res, errorMessage, 400);
    }
  }

  async swapEquipment(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, equipmentId, slot } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const result = await characterEquippedItemService.swapEquipment(
        characterId,
        equipmentId,
        slot as any,
        userId
      );

      return sendSuccess(res, result, 'Equipment swapped successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to swap equipment';

      return sendError(res, errorMessage, 400);
    }
  }
}
