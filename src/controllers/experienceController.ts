import { type Request, type Response } from 'express';
import { type AuthRequest } from '~/middleware/auth';
import { ExperienceService } from '~/services/experienceService';
import {
  sendBadRequest,
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
} from '~/utils/response';

export class ExperienceController {
  private experienceService: ExperienceService;

  constructor() {
    this.experienceService = new ExperienceService();
  }

  async getExperienceLevels(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const { experienceLevels, total } = await this.experienceService.getExperienceLevels(
        page,
        limit
      );

      sendSuccessWithPagination(res, experienceLevels, total, page, limit);
    } catch (error) {
      console.error('Get experience levels error:', error);
      sendInternalError(res, 'Failed to retrieve experience levels');
    }
  }

  async getExperienceLevelByLevel(req: Request, res: Response) {
    try {
      const level = parseInt(req.params.id);
      const experienceLevel = await this.experienceService.getExperienceLevelByLevel(level);

      sendSuccess(res, experienceLevel);
    } catch (error) {
      if (error instanceof Error && error.message.includes('not found')) {
        return sendNotFound(res, error.message);
      }

      console.error('Get experience level error:', error);
      sendInternalError(res, 'Failed to retrieve experience level');
    }
  }

  async createExperienceLevel(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      // TODO: Add admin role check here
      // For now, allowing any authenticated user to create experience levels

      const newExperienceLevel = await this.experienceService.createExperienceLevel(req.body);

      sendCreated(res, newExperienceLevel, 'Experience level created successfully');
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message.includes('required') ||
          error.message.includes('between') ||
          error.message.includes('negative')
        ) {
          return sendBadRequest(res, error.message);
        }

        if (error.message.includes('already exists')) {
          return sendBadRequest(res, error.message);
        }
      }

      console.error('Create experience level error:', error);
      sendInternalError(res, 'Failed to create experience level');
    }
  }

  async updateExperienceLevel(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      // TODO: Add admin role check here
      // For now, allowing any authenticated user to update experience levels

      const level = parseInt(req.params.id);
      const updatedExperienceLevel = await this.experienceService.updateExperienceLevel(
        level,
        req.body
      );

      sendSuccess(res, updatedExperienceLevel, 'Experience level updated successfully');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('required') || error.message.includes('negative')) {
          return sendBadRequest(res, error.message);
        }

        if (error.message.includes('not found')) {
          return sendNotFound(res, error.message);
        }
      }

      console.error('Update experience level error:', error);
      sendInternalError(res, 'Failed to update experience level');
    }
  }

  async deleteExperienceLevel(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      // TODO: Add admin role check here
      // For now, allowing any authenticated user to delete experience levels

      const level = parseInt(req.params.id);

      await this.experienceService.deleteExperienceLevel(level);
      sendSuccess(res, null, `Experience level ${level} deleted successfully`);
    } catch (error) {
      if (error instanceof Error && error.message.includes('not found')) {
        return sendNotFound(res, error.message);
      }

      console.error('Delete experience level error:', error);
      sendInternalError(res, 'Failed to delete experience level');
    }
  }

  async bulkCreateExperienceLevels(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      // TODO: Add admin role check here
      // For now, allowing any authenticated user to bulk create experience levels

      const { experienceLevels } = req.body;
      const result = await this.experienceService.bulkCreateExperienceLevels(experienceLevels);

      sendCreated(res, result, `${result.count} experience levels created successfully`);
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message.includes('required') ||
          error.message.includes('between') ||
          error.message.includes('negative')
        ) {
          return sendBadRequest(res, error.message);
        }

        if (error.message.includes('Duplicate') || error.message.includes('already exist')) {
          return sendBadRequest(res, error.message);
        }
      }

      console.error('Bulk create experience levels error:', error);
      sendInternalError(res, 'Failed to bulk create experience levels');
    }
  }

  async getNextLevelInfo(req: Request, res: Response) {
    try {
      const currentExp = parseInt(req.params.currentExp);
      const result = await this.experienceService.getNextLevelInfo(currentExp);

      sendSuccess(res, result);
    } catch (error) {
      if (error instanceof Error && error.message.includes('valid non-negative number')) {
        return sendBadRequest(res, error.message);
      }

      console.error('Get next level info error:', error);
      sendInternalError(res, 'Failed to get next level information');
    }
  }
}
