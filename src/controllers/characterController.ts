import { type Response } from 'express';
import { type AuthRequest } from '~/middleware/auth';
import { CharacterService } from '~/services/characterService';
import {
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendInternalError,
  sendNotFound,
  sendSuccess,
  sendSuccessWithPagination,
  sendUnauthorized,
} from '~/utils/response';

export class CharacterController {
  private characterService: CharacterService;

  constructor() {
    this.characterService = new CharacterService();
  }

  async getCharacters(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const { characters, total } = await this.characterService.getCharactersByUserId(
        req.user.userId,
        page,
        limit
      );

      sendSuccessWithPagination(res, characters, total, page, limit);
    } catch (error) {
      console.error('Get characters error:', error);
      sendInternalError(res, 'Failed to retrieve characters');
    }
  }

  async getMyCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const character = await this.characterService.getCharacterByUserId(req.user.userId);

      sendSuccess(res, character);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === 'Character not found. Please create a character first.'
      ) {
        return sendNotFound(res, error.message);
      }

      console.error('Get my character error:', error);
      sendInternalError(res, 'Failed to retrieve character');
    }
  }

  async createCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const newCharacter = await this.characterService.createCharacter(req.user.userId, req.body);

      return sendCreated(res, newCharacter, 'Character created successfully');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Invalid job class') {
          return sendBadRequest(res, error.message);
        }

        if (error.message === 'Character name already exists') {
          return sendConflict(res, error.message);
        }
      }

      console.error('Create character error:', error);
      sendInternalError(res, 'Failed to create character');
    }
  }

  async getCharacterById(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { id } = req.params;
      const character = await this.characterService.getCharacterById(id, req.user.userId);

      sendSuccess(res, character);
    } catch (error) {
      if (error instanceof Error && error.message === 'Character not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Get character error:', error);
      sendInternalError(res, 'Failed to retrieve character');
    }
  }

  async updateCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { id } = req.params;
      const { name } = req.body;

      const updatedCharacter = await this.characterService.updateCharacter(
        id,
        req.user.userId,
        name
      );

      return sendSuccess(res, updatedCharacter, 'Character updated successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Character not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Update character error:', error);
      sendInternalError(res, 'Failed to update character');
    }
  }

  async deleteCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { id } = req.params;

      await this.characterService.deleteCharacter(id, req.user.userId);
      sendSuccess(res, null, 'Character deleted successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Character not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Delete character error:', error);
      sendInternalError(res, 'Failed to delete character');
    }
  }

  async allocateStats(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const { id } = req.params;
      const updatedCharacter = await this.characterService.allocateStats(
        id,
        req.user.userId,
        req.body
      );

      sendSuccess(res, updatedCharacter, 'Stats allocated successfully');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Character not found') {
          return sendNotFound(res, error.message);
        }

        if (error.message === 'Not enough status points available') {
          return sendBadRequest(res, error.message);
        }
      }

      console.error('Allocate stats error:', error);
      sendInternalError(res, 'Failed to allocate stats');
    }
  }

  async restCharacter(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return sendUnauthorized(res, 'User not authenticated');
      }

      const character = await this.characterService.getCharacterByUserId(req.user.userId);
      const updatedCharacter = await this.characterService.restCharacter(
        character.id,
        req.user.userId
      );

      sendSuccess(res, updatedCharacter, 'Character rested successfully');
    } catch (error) {
      if (error instanceof Error && error.message === 'Character not found') {
        return sendNotFound(res, error.message);
      }

      console.error('Rest character error:', error);
      sendInternalError(res, 'Failed to rest character');
    }
  }
}
