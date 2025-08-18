import type { Response } from 'express';
import { CharacterEquipmentService } from '~/services/characterEquipmentService';
import type { AuthenticatedRequest } from '~/types';
import { sendError, sendSuccess } from '~/utils/response';

const characterEquipmentService = new CharacterEquipmentService();

export class CharacterEquipmentController {
  async getCharacterEquipment(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const characterEquipment = await characterEquipmentService.getCharacterEquipment(
        characterId,
        userId
      );

      return sendSuccess(res, characterEquipment, 'Character equipment retrieved successfully');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get character equipment';

      return sendError(res, errorMessage, 400);
    }
  }

  async getEquippedEquipment(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const equippedEquipment = await characterEquipmentService.getEquippedEquipment(
        characterId,
        userId
      );

      return sendSuccess(res, equippedEquipment, 'Equipped equipment retrieved successfully');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to get equipped equipment';

      return sendError(res, errorMessage, 400);
    }
  }

  async equipItem(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, equipmentId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const equippedItem = await characterEquipmentService.equipItem(
        characterId,
        equipmentId,
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
      const { characterId, equipmentId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const unequippedItem = await characterEquipmentService.unequipItem(
        characterId,
        equipmentId,
        userId
      );

      return sendSuccess(res, unequippedItem, 'Item unequipped successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to unequip item';

      return sendError(res, errorMessage, 400);
    }
  }

  async sellEquipment(req: AuthenticatedRequest, res: Response) {
    try {
      const { characterId, equipmentId } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const sellResult = await characterEquipmentService.sellEquipment(
        characterId,
        equipmentId,
        userId
      );

      return sendSuccess(res, sellResult, 'Equipment sold successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to sell equipment';

      return sendError(res, errorMessage, 400);
    }
  }
}
