import { prisma } from '~/database/prisma';

export class InventoryService {
  async getCharacterInventory(characterId: string, userId: string) {
    // Check if character belongs to user
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    const inventory = await prisma.characterInventory.findMany({
      where: { characterId },
      include: {
        item: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return inventory;
  }

  async addItemToInventory(
    characterId: string,
    userId: string,
    itemId: string,
    quantity: number = 1
  ) {
    // Check if character belongs to user
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    // Check if item exists
    const item = await prisma.item.findUnique({
      where: { id: Number(itemId) },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    // Check if item already exists in inventory
    const existingItem = await prisma.characterInventory.findFirst({
      where: {
        characterId,
        itemId: Number(itemId),
      },
    });

    if (existingItem) {
      // Update quantity
      const updatedItem = await prisma.characterInventory.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
        include: { item: true },
      });

      return {
        item: updatedItem,
        message: 'Item quantity updated',
        isUpdate: true,
      };
    } else {
      // Add new item
      const newItem = await prisma.characterInventory.create({
        data: {
          characterId,
          itemId: Number(itemId),
          quantity,
        },
        include: { item: true },
      });

      return {
        item: newItem,
        message: 'Item added to inventory',
        isUpdate: false,
      };
    }
  }

  async updateItemQuantity(characterId: string, userId: string, itemId: string, quantity: number) {
    // Check if character belongs to user
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    // Find inventory item
    const inventoryItem = await prisma.characterInventory.findFirst({
      where: {
        characterId,
        itemId: Number(itemId),
      },
    });

    if (!inventoryItem) {
      throw new Error('Item not found in inventory');
    }

    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      await prisma.characterInventory.delete({
        where: { id: inventoryItem.id },
      });

      return {
        message: 'Item removed from inventory',
        removed: true,
      };
    } else {
      // Update quantity
      const updatedItem = await prisma.characterInventory.update({
        where: { id: inventoryItem.id },
        data: { quantity },
        include: { item: true },
      });

      return {
        item: updatedItem,
        message: 'Item quantity updated',
        removed: false,
      };
    }
  }

  async removeItemFromInventory(characterId: string, userId: string, itemId: string) {
    // Check if character belongs to user
    const character = await prisma.character.findUnique({
      where: { id: characterId },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    if (character.userId !== userId) {
      throw new Error('Character does not belong to user');
    }

    // Find and delete inventory item
    const inventoryItem = await prisma.characterInventory.findFirst({
      where: {
        characterId,
        itemId: Number(itemId),
      },
    });

    if (!inventoryItem) {
      throw new Error('Item not found in inventory');
    }

    await prisma.characterInventory.delete({
      where: { id: inventoryItem.id },
    });

    return true;
  }
}
