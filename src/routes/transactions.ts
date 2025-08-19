import { Router } from 'express';
import { TransactionController } from '../controllers/transactionController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const transactionController = new TransactionController();

// Buy equipment
router.post('/buy', authenticateToken, transactionController.buyEquipment);

// Sell equipment
router.post('/sell', authenticateToken, transactionController.sellEquipment);

// Get character transactions
router.get(
  '/character/:characterId',
  authenticateToken,
  transactionController.getCharacterTransactions
);

// Get transaction by ID
router.get('/:transactionId', authenticateToken, transactionController.getTransactionById);

export default router;
