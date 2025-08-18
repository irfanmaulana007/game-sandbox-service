import { type Response } from 'express';
import { type AuthRequest } from '~/middleware/auth';
import { BattleService } from '~/services/battleService';
import {
  sendForbidden,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
} from '~/utils/response';

export class BattleController {
  private battleService: BattleService;

  constructor() {
    this.battleService = new BattleService();
  }

  async startBattle(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const result = await this.battleService.startBattle(req.user.userId, req.body);

      return sendSuccess(res, result);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character or monster not found') {
          return res.status(404).json({
            success: false,
            error: error.message,
          });
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }
      }

      console.error('Battle start error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getBattleById(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { id } = req.params;
      const battleLog = await this.battleService.getBattleById(id, req.user.userId);

      return sendSuccess(res, battleLog);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Battle not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Battle does not belong to user') {
          return sendForbidden(res, error.message);
        }
      }

      console.error('Get battle error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getBattlesForCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { characterId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.battleService.getBattlesForCharacter(
        characterId,
        req.user.userId,
        page,
        limit
      );

      return sendSuccessWithPagination(res, result.battles, result.pagination.total, page, limit);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Character does not belong to user') {
          return sendForbidden(res, error.message);
        }
      }

      console.error('Get character battles error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
