import { type Request, type Response } from 'express';
import { JobClassesService } from '~/services/jobClassesService';
import {
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
} from '~/utils/response';

export class JobClassesController {
  private jobClassesService: JobClassesService;

  constructor() {
    this.jobClassesService = new JobClassesService();
  }

  async getJobClasses(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.jobClassesService.getJobClasses(page, limit);

      return sendSuccessWithPagination(
        res,
        result.jobClasses,
        result.pagination.total,
        page,
        limit
      );
    } catch (error) {
      console.error('Get job classes error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getJobClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const jobClass = await this.jobClassesService.getJobClassById(Number(id));

      return sendSuccess(res, jobClass);
    } catch (error) {
      if (error instanceof Error && error.message === 'Job class not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get job class error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }

  async getJobClassByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const jobClass = await this.jobClassesService.getJobClassByName(name);

      return sendSuccess(res, jobClass);
    } catch (error) {
      if (error instanceof Error && error.message === 'Job class not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get job class by name error:', error);

      return sendInternalError(res, 'Internal server error');
    }
  }
}
