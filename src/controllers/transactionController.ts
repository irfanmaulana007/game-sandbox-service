import { Request, Response } from 'express';
import {
  BuyEquipmentRequest,
  SellEquipmentRequest,
  TransactionService,
} from '../services/transactionService';
import { sendError, sendSuccess } from '../utils/response';

const transactionService = new TransactionService();

export class TransactionController {
  async buyEquipment(req: Request, res: Response) {
    try {
      const { characterId, equipmentId, quantity = 1 } = req.body;

      // Validate required fields
      if (!characterId || !equipmentId) {
        return sendError(res, 'Character ID and Equipment ID are required', 400);
      }

      const buyRequest: BuyEquipmentRequest = {
        characterId,
        equipmentId: Number(equipmentId),
        quantity: Number(quantity),
      };

      const transaction = await transactionService.buyEquipment(buyRequest);

      return sendSuccess(
        res,
        {
          transaction,
          message: `Successfully purchased ${quantity}x ${transaction.equipment.name} for ${transaction.totalAmount} gold`,
        },
        'Equipment purchased successfully',
        201
      );
    } catch (error: any) {
      console.error('Error buying equipment:', error);
      return sendError(res, error.message || 'Internal server error', error.statusCode || 500);
    }
  }

  async sellEquipment(req: Request, res: Response) {
    try {
      const { characterId, equipmentId, quantity = 1 } = req.body;

      // Validate required fields
      if (!characterId || !equipmentId) {
        return sendError(res, 'Character ID and Equipment ID are required', 400);
      }

      const sellRequest: SellEquipmentRequest = {
        characterId,
        equipmentId: Number(equipmentId),
        quantity: Number(quantity),
      };

      const transaction = await transactionService.sellEquipment(sellRequest);

      return sendSuccess(
        res,
        {
          transaction,
          message: `Successfully sold ${quantity}x ${transaction.equipment.name} for ${transaction.totalAmount} gold`,
        },
        'Equipment sold successfully',
        200
      );
    } catch (error: any) {
      console.error('Error selling equipment:', error);
      return sendError(res, error.message || 'Internal server error', error.statusCode || 500);
    }
  }

  async getCharacterTransactions(req: Request, res: Response) {
    try {
      const { characterId } = req.params;

      if (!characterId) {
        return sendError(res, 'Character ID is required', 400);
      }

      const transactions = await transactionService.getCharacterTransactions(characterId);

      return sendSuccess(
        res,
        {
          transactions,
          count: transactions.length,
        },
        'Character transactions retrieved successfully',
        200
      );
    } catch (error: any) {
      console.error('Error getting character transactions:', error);
      return sendError(res, error.message || 'Internal server error', error.statusCode || 500);
    }
  }

  async getTransactionById(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;

      if (!transactionId) {
        return sendError(res, 'Transaction ID is required', 400);
      }

      const transaction = await transactionService.getTransactionById(transactionId);

      if (!transaction) {
        return sendError(res, 'Transaction not found', 404);
      }

      return sendSuccess(
        res,
        {
          transaction,
        },
        'Transaction retrieved successfully',
        200
      );
    } catch (error: any) {
      console.error('Error getting transaction by ID:', error);
      return sendError(res, error.message || 'Internal server error', error.statusCode || 500);
    }
  }
}
