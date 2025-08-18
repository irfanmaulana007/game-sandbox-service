import { prisma } from '~/database/prisma';

export class CharacterEquipmentService {
  async getCharacterEquipment(characterId: string, userId: string) {
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

    // Get character's equipment with equipment details
    const characterEquipment = await prisma.characterEquipment.findMany({
      where: {
        character_id: characterId,
      },
      include: {
        equipment: true,
      },
    });

    return characterEquipment;
  }

  async getEquippedEquipment(characterId: string, userId: string) {
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

    const equippedEquipment = await prisma.characterEquipment.findMany({
      where: {
        character_id: characterId,
        equipped: true,
      },
    });

    if (!equippedEquipment) {
      throw new Error('No equipped equipment found');
    }

    return equippedEquipment;
  }

  async equipItem(characterId: string, equipmentId: string, userId: string) {
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

    // Get the character equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        id: equipmentId,
        character_id: characterId,
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

    // Unequip any existing equipment in the same slot
    await prisma.characterEquipment.updateMany({
      where: {
        character_id: characterId,
        equipped: true,
      },
      data: {
        equipped: false,
      },
    });

    // Equip the new item
    const updatedEquipment = await prisma.characterEquipment.update({
      where: {
        id: equipmentId,
      },
      data: {
        equipped: true,
      },
      include: {
        equipment: true,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return updatedEquipment;
  }

  async unequipItem(characterId: string, equipmentId: string, userId: string) {
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

    // Get the character equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        id: equipmentId,
        character_id: characterId,
      },
    });

    if (!characterEquipment) {
      throw new Error('Equipment not found in character inventory');
    }

    // Unequip the item
    const updatedEquipment = await prisma.characterEquipment.update({
      where: {
        id: equipmentId,
      },
      data: {
        equipped: false,
      },
      include: {
        equipment: true,
      },
    });

    // Recalculate character stats with equipped items
    await this.recalculateCharacterStats(characterId);

    return updatedEquipment;
  }

  async sellEquipment(characterId: string, equipmentId: string, userId: string) {
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

    // Get the character equipment
    const characterEquipment = await prisma.characterEquipment.findFirst({
      where: {
        id: equipmentId,
        character_id: characterId,
      },
      include: {
        equipment: true,
      },
    });

    if (!characterEquipment) {
      throw new Error('Equipment not found in character inventory');
    }

    // Calculate sell price
    const sellPrice = characterEquipment.equipment.sell_price;

    // Delete the equipment from character inventory
    await prisma.characterEquipment.delete({
      where: {
        id: equipmentId,
      },
    });

    // Add gold to character
    await prisma.character.update({
      where: {
        id: characterId,
      },
      data: {
        gold: character.gold + sellPrice,
      },
    });

    // Recalculate character stats if the item was equipped
    if (characterEquipment.equipped) {
      await this.recalculateCharacterStats(characterId);
    }

    return {
      soldEquipment: characterEquipment,
      goldGained: sellPrice,
      newGoldBalance: character.gold + sellPrice,
    };
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
    const equippedItems = await prisma.characterEquipment.findMany({
      where: {
        character_id: characterId,
        equipped: true,
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
