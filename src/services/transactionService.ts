import { PrismaClient, TransactionType } from '@prisma/client';

// Custom error class for API errors
class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

const prisma = new PrismaClient();

export interface BuyEquipmentRequest {
  characterId: string;
  equipmentId: number;
  quantity?: number;
}

export interface SellEquipmentRequest {
  characterId: string;
  equipmentId: number;
  quantity?: number;
}

export interface TransactionResponse {
  id: string;
  characterId: string;
  equipmentId: number;
  type: TransactionType;
  quantity: number;
  price: number;
  totalAmount: number;
  createdAt: Date;
  equipment: {
    id: number;
    name: string;
    type: string;
    rarity: string;
  };
}

export class TransactionService {
  async buyEquipment(data: BuyEquipmentRequest): Promise<TransactionResponse> {
    const { characterId, equipmentId, quantity = 1 } = data;

    // Validate quantity
    if (quantity <= 0) {
      throw new ApiError(400, 'Quantity must be greater than 0');
    }

    // Get character with current gold
    const character = await prisma.character.findUnique({
      where: { id: characterId },
      select: {
        id: true,
        gold: true,
        level: true,
      },
    });

    if (!character) {
      throw new ApiError(404, 'Character not found');
    }

    // Get equipment with buy price
    const equipment = await prisma.equipment.findUnique({
      where: { id: equipmentId },
      select: {
        id: true,
        name: true,
        type: true,
        rarity: true,
        buy_price: true,
        min_level: true,
      },
    });

    if (!equipment) {
      throw new ApiError(404, 'Equipment not found');
    }

    // Check if character meets minimum level requirement
    if (character.level < equipment.min_level) {
      throw new ApiError(
        400,
        `Character level ${character.level} is too low. Required level: ${equipment.min_level}`
      );
    }

    const totalCost = equipment.buy_price * quantity;

    // Check if character has enough gold
    if (character.gold < totalCost) {
      throw new ApiError(
        400,
        `Insufficient gold. Required: ${totalCost}, Available: ${character.gold}`
      );
    }

    // Start transaction
    const result = await prisma.$transaction(async tx => {
      // Create transaction record
      const transaction = await tx.transaction.create({
        data: {
          character_id: characterId,
          equipment_id: equipmentId,
          type: TransactionType.buy,
          quantity,
          price: equipment.buy_price,
          total_amount: totalCost,
        },
        include: {
          equipment: {
            select: {
              id: true,
              name: true,
              type: true,
              rarity: true,
            },
          },
        },
      });

      // Deduct gold from character
      await tx.character.update({
        where: { id: characterId },
        data: { gold: character.gold - totalCost },
      });

      // Add equipment to character's inventory
      await tx.characterEquipment.create({
        data: {
          character_id: characterId,
          equipment_id: equipmentId,
          equipped: false,
        },
      });

      return transaction;
    });

    return {
      id: result.id,
      characterId: result.character_id,
      equipmentId: result.equipment_id,
      type: result.type,
      quantity: result.quantity,
      price: result.price,
      totalAmount: result.total_amount,
      createdAt: result.created_at,
      equipment: result.equipment,
    };
  }

  async sellEquipment(data: SellEquipmentRequest): Promise<TransactionResponse> {
    const { characterId, equipmentId, quantity = 1 } = data;

    // Validate quantity
    if (quantity <= 0) {
      throw new ApiError(400, 'Quantity must be greater than 0');
    }

    // Get character with current gold
    const character = await prisma.character.findUnique({
      where: { id: characterId },
      select: {
        id: true,
        gold: true,
      },
    });

    if (!character) {
      throw new ApiError(404, 'Character not found');
    }

    // Get equipment with sell price
    const equipment = await prisma.equipment.findUnique({
      where: { id: equipmentId },
      select: {
        id: true,
        name: true,
        type: true,
        rarity: true,
        sell_price: true,
      },
    });

    if (!equipment) {
      throw new ApiError(404, 'Equipment not found');
    }

    // Check if character owns the equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        character_id: characterId,
        equipment_id: equipmentId,
      },
    });

    if (!characterEquipment) {
      throw new ApiError(400, 'Character does not own this equipment');
    }

    // Check if equipment is equipped
    if (characterEquipment.equipped) {
      throw new ApiError(400, 'Cannot sell equipped equipment. Please unequip it first.');
    }

    const totalEarnings = equipment.sell_price * quantity;

    // Start transaction
    const result = await prisma.$transaction(async tx => {
      // Create transaction record
      const transaction = await tx.transaction.create({
        data: {
          character_id: characterId,
          equipment_id: equipmentId,
          type: TransactionType.sell,
          quantity,
          price: equipment.sell_price,
          total_amount: totalEarnings,
        },
        include: {
          equipment: {
            select: {
              id: true,
              name: true,
              type: true,
              rarity: true,
            },
          },
        },
      });

      // Add gold to character
      await tx.character.update({
        where: { id: characterId },
        data: { gold: character.gold + totalEarnings },
      });

      // Remove equipment from character's inventory
      await tx.characterEquipment.delete({
        where: { id: characterEquipment.id },
      });

      return transaction;
    });

    return {
      id: result.id,
      characterId: result.character_id,
      equipmentId: result.equipment_id,
      type: result.type,
      quantity: result.quantity,
      price: result.price,
      totalAmount: result.total_amount,
      createdAt: result.created_at,
      equipment: result.equipment,
    };
  }

  async getCharacterTransactions(characterId: string): Promise<TransactionResponse[]> {
    const transactions = await prisma.transaction.findMany({
      where: { character_id: characterId },
      include: {
        equipment: {
          select: {
            id: true,
            name: true,
            type: true,
            rarity: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    return transactions.map(transaction => ({
      id: transaction.id,
      characterId: transaction.character_id,
      equipmentId: transaction.equipment_id,
      type: transaction.type,
      quantity: transaction.quantity,
      price: transaction.price,
      totalAmount: transaction.total_amount,
      createdAt: transaction.created_at,
      equipment: transaction.equipment,
    }));
  }

  async getTransactionById(transactionId: string): Promise<TransactionResponse | null> {
    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: {
        equipment: {
          select: {
            id: true,
            name: true,
            type: true,
            rarity: true,
          },
        },
      },
    });

    if (!transaction) {
      return null;
    }

    return {
      id: transaction.id,
      characterId: transaction.character_id,
      equipmentId: transaction.equipment_id,
      type: transaction.type,
      quantity: transaction.quantity,
      price: transaction.price,
      totalAmount: transaction.total_amount,
      createdAt: transaction.created_at,
      equipment: transaction.equipment,
    };
  }
}
