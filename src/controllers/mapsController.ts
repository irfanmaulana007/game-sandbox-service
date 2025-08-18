import type { MapDifficulty } from '@prisma/client';
import { type Request, type Response } from 'express';
import { MapsService } from '~/services/mapsService';
import {
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
} from '~/utils/response';

export class MapsController {
  private mapsService: MapsService;

  constructor() {
    this.mapsService = new MapsService();
  }

  async getMaps(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const difficulty = req.query.difficulty as MapDifficulty;
      const minLevel = req.query.minLevel ? parseInt(req.query.minLevel as string) : undefined;
      const maxLevel = req.query.maxLevel ? parseInt(req.query.maxLevel as string) : undefined;

      const filters = { difficulty, minLevel, maxLevel };
      const result = await this.mapsService.getMaps(page, limit, filters);

      return sendSuccessWithPagination(res, result.maps, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get maps error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMapById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const map = await this.mapsService.getMapById(Number(id));

      return sendSuccess(res, map);
    } catch (error) {
      if (error instanceof Error && error.message === 'Map not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get map error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
