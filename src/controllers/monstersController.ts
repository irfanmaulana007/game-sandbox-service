import type { MonsterRank } from '@prisma/client';
import { type Request, type Response } from 'express';
import { MonstersService } from '~/services/monstersService';
import {
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
} from '~/utils/response';

export class MonstersController {
  private monstersService: MonstersService;

  constructor() {
    this.monstersService = new MonstersService();
  }

  async getMonsters(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const level = req.query.level ? parseInt(req.query.level as string) : undefined;
      const mapId = req.query.mapId ? parseInt(req.query.mapId as string) : undefined;
      const rank = req.query.rank as MonsterRank;

      const filters = { level, mapId, rank };
      const result = await this.monstersService.getMonsters(page, limit, filters);

      return sendSuccessWithPagination(res, result.monsters, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get monsters error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMonsterById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const monster = await this.monstersService.getMonsterById(Number(id));

      return sendSuccess(res, monster);
    } catch (error) {
      if (error instanceof Error && error.message === 'Monster not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get monster error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMonsterDetailsById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const monsterDetails = await this.monstersService.getMonsterDetailsById(Number(id));

      return sendSuccess(res, monsterDetails);
    } catch (error) {
      console.error('Get monster details error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMonstersByMap(req: Request, res: Response) {
    try {
      const { mapId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.monstersService.getMonstersByMap(Number(mapId), page, limit);

      return sendSuccessWithPagination(res, result.monsters, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get monsters by map error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMonstersByRank(req: Request, res: Response) {
    try {
      const rank = req.query.rank as MonsterRank;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.monstersService.getMonstersByRank(rank, page, limit);

      return sendSuccessWithPagination(res, result.monsters, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get monsters by rank error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
