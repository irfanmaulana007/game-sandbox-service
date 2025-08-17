import type { EquipmentType, Rarity } from '@prisma/client';
import { type Request, type Response } from 'express';
import { EquipmentService } from '~/services/equipmentService';
import {
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
} from '~/utils/response';

export class EquipmentController {
  private equipmentService: EquipmentService;

  constructor() {
    this.equipmentService = new EquipmentService();
  }

  async getEquipment(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const type = req.query.type as EquipmentType;
      const rarity = req.query.rarity as Rarity;
      const minLevel = req.query.minLevel ? parseInt(req.query.minLevel as string) : undefined;

      const filters = { type, rarity, minLevel };
      const result = await this.equipmentService.getEquipment(page, limit, filters);

      return sendSuccessWithPagination(res, result.equipment, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get equipment error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getEquipmentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const equipment = await this.equipmentService.getEquipmentById(Number(id));

      return sendSuccess(res, equipment);
    } catch (error) {
      if (error instanceof Error && error.message === 'Equipment not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get equipment error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getEquipmentByType(req: Request, res: Response) {
    try {
      const type = req.query.type as EquipmentType;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await this.equipmentService.getEquipmentByType(type, page, limit);

      return sendSuccessWithPagination(res, result.equipment, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get equipment by type error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getEquipmentByRarity(req: Request, res: Response) {
    try {
      const rarity = req.query.rarity as Rarity;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const result = await this.equipmentService.getEquipmentByRarity(rarity, page, limit);

      return sendSuccessWithPagination(res, result.equipment, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get equipment by rarity error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
