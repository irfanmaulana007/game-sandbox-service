import { type Request, type Response } from 'express';
import { MapZonesService } from '~/services/mapZonesService';
import {
  sendBadRequest,
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
} from '~/utils/response';

export class MapZonesController {
  private mapZonesService: MapZonesService;

  constructor() {
    this.mapZonesService = new MapZonesService();
  }

  async getMapZones(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const mapId = req.query.mapId ? parseInt(req.query.mapId as string) : undefined;

      const filters = { mapId };
      const result = await this.mapZonesService.getMapZones(page, limit, filters);

      return sendSuccessWithPagination(res, result.mapZones, result.pagination.total, page, limit);
    } catch (error) {
      console.error('Get map zones error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMapZoneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const mapZone = await this.mapZonesService.getMapZoneById(Number(id));

      return sendSuccess(res, mapZone);
    } catch (error) {
      if (error instanceof Error && error.message === 'Map zone not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get map zone error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async createMapZone(req: Request, res: Response) {
    try {
      const { map_id, name, description } = req.body;

      if (!map_id || !name) {
        return sendBadRequest(res, 'Map ID and name are required');
      }

      const mapZone = await this.mapZonesService.createMapZone({
        map_id: Number(map_id),
        name,
        description,
      });

      return sendCreated(res, mapZone, 'Map zone created successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Map not found') {
        return sendBadRequest(res, error.message);
      }

      console.error('Create map zone error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async updateMapZone(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const mapZone = await this.mapZonesService.updateMapZone(Number(id), {
        name,
        description,
      });

      return sendSuccess(res, mapZone, 'Map zone updated successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Map zone not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Update map zone error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async deleteMapZone(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.mapZonesService.deleteMapZone(Number(id));

      return sendSuccess(res, result);
    } catch (error) {
      if (error instanceof Error && error.message === 'Map zone not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Delete map zone error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getMapZonesByMapId(req: Request, res: Response) {
    try {
      const { mapId } = req.params;
      const mapZones = await this.mapZonesService.getMapZonesByMapId(Number(mapId));

      return sendSuccess(res, mapZones);
    } catch (error) {
      console.error('Get map zones by map ID error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
