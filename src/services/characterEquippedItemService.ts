import type { EquipmentSlot } from '@prisma/client';
import { prisma } from '~/database/prisma';

export class CharacterEquippedItemService {
  async getEquippedItems(characterId: string, userId: string) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Get all equipped items with equipment details
    const equippedItems = await prisma.characterEquippedItem.findMany({
      where: {
        character_id: characterId,
      },
      include: {
        equipment: true,
      },
    });

    return equippedItems;
  }

  async getEquippedItemBySlot(characterId: string, slot: EquipmentSlot, userId: string) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Get equipped item in specific slot
    const equippedItem = await prisma.characterEquippedItem.findFirst({
      where: {
        character_id: characterId,
        slot,
      },
      include: {
        equipment: true,
      },
    });

    return equippedItem;
  }

  async equipItem(characterId: string, equipmentId: string, slot: EquipmentSlot, userId: string) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Check if character owns this equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        character_id: characterId,
        equipment_id: parseInt(equipmentId),
      },
      include: {
        equipment: true,
      },
    });

    if (!characterEquipment) {
      throw new Error('Equipment not found in character inventory');
    }

    // Check if character meets the minimum level requirement
    if (character.level < characterEquipment.equipment.min_level) {
      throw new Error(
        `Character level ${character.level} is too low for this equipment (requires level ${characterEquipment.equipment.min_level})`
      );
    }

    // Check if the equipment type matches the slot
    if (!this.isEquipmentTypeCompatibleWithSlot(characterEquipment.equipment.type, slot)) {
      throw new Error(
        `Equipment type ${characterEquipment.equipment.type} is not compatible with slot ${slot}`
      );
    }

    // Check if slot is already occupied
    const existingEquippedItem = await prisma.characterEquippedItem.findFirst({
      where: {
        character_id: characterId,
        slot,
      },
    });

    if (existingEquippedItem) {
      throw new Error(`Slot ${slot} is already occupied`);
    }

    // Create the equipped item
    const equippedItem = await prisma.characterEquippedItem.create({
      data: {
        character_id: characterId,
        equipment_id: parseInt(equipmentId),
        slot,
        characterEquipmentId: characterEquipment.id,
      },
      include: {
        equipment: true,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return equippedItem;
  }

  async unequipItem(characterId: string, equippedItemId: string, userId: string) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Get the equipped item
    const equippedItem = await prisma.characterEquippedItem.findFirst({
      where: {
        id: equippedItemId,
        character_id: characterId,
      },
      include: {
        equipment: true,
      },
    });

    if (!equippedItem) {
      throw new Error('Equipped item not found');
    }

    // Delete the equipped item
    await prisma.characterEquippedItem.delete({
      where: {
        id: equippedItemId,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return {
      message: 'Item unequipped successfully',
      unequippedItem: equippedItem,
    };
  }

  async unequipItemBySlot(characterId: string, slot: EquipmentSlot, userId: string) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Get the equipped item in the specified slot
    const equippedItem = await prisma.characterEquippedItem.findFirst({
      where: {
        character_id: characterId,
        slot,
      },
      include: {
        equipment: true,
      },
    });

    if (!equippedItem) {
      throw new Error(`No item equipped in slot ${slot}`);
    }

    // Delete the equipped item
    await prisma.characterEquippedItem.delete({
      where: {
        id: equippedItem.id,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return {
      message: 'Item unequipped successfully',
      unequippedItem: equippedItem,
    };
  }

  async swapEquipment(
    characterId: string,
    equipmentId: string,
    slot: EquipmentSlot,
    userId: string
  ) {
    // Verify character belongs to user
    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        user_id: userId,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Check if character owns this equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        character_id: characterId,
        equipment_id: parseInt(equipmentId),
      },
      include: {
        equipment: true,
      },
    });

    if (!characterEquipment) {
      throw new Error('Equipment not found in character inventory');
    }

    // Check if character meets the minimum level requirement
    if (character.level < characterEquipment.equipment.min_level) {
      throw new Error(
        `Character level ${character.level} is too low for this equipment (requires level ${characterEquipment.equipment.min_level})`
      );
    }

    // Check if the equipment type matches the slot
    if (!this.isEquipmentTypeCompatibleWithSlot(characterEquipment.equipment.type, slot)) {
      throw new Error(
        `Equipment type ${characterEquipment.equipment.type} is not compatible with slot ${slot}`
      );
    }

    // Check if slot is occupied and unequip existing item
    const existingEquippedItem = await prisma.characterEquippedItem.findFirst({
      where: {
        character_id: characterId,
        slot,
      },
      include: {
        equipment: true,
      },
    });

    let unequippedItem = null;

    if (existingEquippedItem) {
      // Delete the existing equipped item
      await prisma.characterEquippedItem.delete({
        where: {
          id: existingEquippedItem.id,
        },
      });
      unequippedItem = existingEquippedItem;
    }

    // Create the new equipped item
    const newEquippedItem = await prisma.characterEquippedItem.create({
      data: {
        character_id: characterId,
        equipment_id: parseInt(equipmentId),
        slot,
        characterEquipmentId: characterEquipment.id,
      },
      include: {
        equipment: true,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return {
      newEquippedItem,
      unequippedItem,
    };
  }

  private isEquipmentTypeCompatibleWithSlot(equipmentType: string, slot: EquipmentSlot): boolean {
    switch (equipmentType) {
      case 'weapon':
        return slot === 'weapon';
      case 'armor':
        return slot === 'armor';
      case 'accessory':
        return slot === 'accessory_1' || slot === 'accessory_2';
      default:
        return false;
    }
  }

  private async recalculateCharacterStats(characterId: string) {
    // Get character with job class
    const character = await prisma.character.findUnique({
      where: { id: characterId },
      include: { job: true },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Get all equipped items
    const equippedItems = await prisma.characterEquippedItem.findMany({
      where: {
        character_id: characterId,
      },
      include: {
        equipment: true,
      },
    });

    // Calculate base stats from job class and level
    const baseHealth =
      character.job.base_health + (character.level - 1) * character.job.health_per_level;
    const baseAttack =
      character.job.base_attack + (character.level - 1) * character.job.attack_per_level;
    const baseDefense =
      character.job.base_defense + (character.level - 1) * character.job.defense_per_level;
    const baseSpeed =
      character.job.base_speed + (character.level - 1) * character.job.speed_per_level;
    const baseCritical =
      character.job.base_critical + (character.level - 1) * character.job.critical_per_level;

    // Add equipment bonuses
    const equipmentBonuses = equippedItems.reduce(
      (bonuses, item) => ({
        health: bonuses.health + item.equipment.health_bonus,
        attack: bonuses.attack + item.equipment.attack_bonus,
        defense: bonuses.defense + item.equipment.defense_bonus,
        speed: bonuses.speed + item.equipment.speed_bonus,
        critical: bonuses.critical + item.equipment.critical_bonus,
      }),
      { health: 0, attack: 0, defense: 0, speed: 0, critical: 0 }
    );

    // Calculate final stats
    const finalHealth = baseHealth + equipmentBonuses.health;
    const finalAttack = baseAttack + equipmentBonuses.attack;
    const finalDefense = baseDefense + equipmentBonuses.defense;
    const finalSpeed = baseSpeed + equipmentBonuses.speed;
    const finalCritical = baseCritical + equipmentBonuses.critical;

    // Update character stats
    await prisma.character.update({
      where: { id: characterId },
      data: {
        max_health: finalHealth,
        attack: finalAttack,
        defense: finalDefense,
        speed: finalSpeed,
        critical: finalCritical,
        // Ensure current health doesn't exceed max health
        health: Math.min(character.health, finalHealth),
      },
    });
  }
}
