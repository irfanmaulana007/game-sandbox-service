import { faker } from '@faker-js/faker';
import type { EquipmentType, Rarity } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import type { SeederConfig } from './config';
import { getRandomArrayItem, getRandomInRange } from './config';

// Constants for equipment generation
const EQUIPMENT_CONSTANTS = {
  WEAPON_TYPES: [
    'Sword',
    'Axe',
    'Bow',
    'Staff',
    'Dagger',
    'Mace',
    'Spear',
    'Hammer',
    'Crossbow',
    'Wand',
  ],
  ARMOR_TYPES: [
    'Armor',
    'Helmet',
    'Gauntlets',
    'Boots',
    'Shield',
    'Cape',
    'Belt',
    'Ring',
    'Amulet',
    'Bracers',
  ],
  ACCESSORY_TYPES: [
    'Ring',
    'Amulet',
    'Belt',
    'Cape',
    'Bracers',
    'Boots',
    'Helmet',
    'Gloves',
    'Necklace',
    'Earring',
  ],
  PREFIXES: [
    'Wooden',
    'Iron',
    'Steel',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Mythril',
    'Adamantium',
    'Divine',
  ],
  SUFFIXES: [
    'of Power',
    'of Defense',
    'of Speed',
    'of Critical',
    'of Life',
    'of Death',
    'of Light',
    'of Darkness',
    'of Elements',
    'of Time',
  ],
  LEVEL_RANGE: { min: 1, max: 40 },
  MAX_ATTRIBUTE_PERCENTAGE: 0.4,
  PRICE_VARIANCE: 0.3,
  DROP_RATE_VARIANCE: 0.2,
  SELL_PRICE_RATIO_RANGE: { min: 60, max: 80 },
};

const RARITY_MULTIPLIERS = {
  common: 1,
  uncommon: 1.5,
  rare: 2.5,
  epic: 5,
  legendary: 10,
} as const;

const RARITY_PRICE_MULTIPLIERS = {
  common: 5,
  uncommon: 10,
  rare: 20,
  epic: 50,
  legendary: 200,
} as const;

const BASE_DROP_RATES = {
  common: 0.25,
  uncommon: 0.12,
  rare: 0.06,
  epic: 0.025,
  legendary: 0.008,
} as const;

const TYPE_WEIGHTS = {
  weapon: { health: 0.05, attack: 0.45, defense: 0.05, speed: 0.25, critical: 0.2 },
  armor: { health: 0.45, attack: 0.05, defense: 0.35, speed: 0.05, critical: 0.1 },
  accessory: { health: 0.2, attack: 0.2, defense: 0.15, speed: 0.25, critical: 0.2 },
} as const;

export class EquipmentSeeder {
  private config: SeederConfig;

  constructor(config: SeederConfig) {
    this.config = config;
  }

  async seed(): Promise<void> {
    console.log(`⚔️ Seeding equipment with special rules for legendary and epic...`);

    // Generate legendary and epic equipment based on specific level rules
    await this.generateSpecialRarityEquipment();

    // Generate other rarities using existing mechanism
    await this.generateRegularEquipment();

    console.log('✅ Successfully seeded equipment');
  }

  private async generateSpecialRarityEquipment(): Promise<void> {
    console.log('🔮 Generating legendary and epic equipment...');

    // Generate legendary equipment (level 5, 10, 15, 20, 25, 30, etc.)
    for (let level = 5; level <= 40; level += 5) {
      await this.generateEquipmentForLevel('legendary', level);
    }

    // Generate epic equipment (level 4, 8, 12, 16, 20, etc.)
    for (let level = 4; level <= 40; level += 4) {
      await this.generateEquipmentForLevel('epic', level);
    }
  }

  private async generateEquipmentForLevel(
    rarity: 'legendary' | 'epic',
    level: number
  ): Promise<void> {
    const equipmentTypes: Array<{ type: EquipmentType; count: number }> = [
      { type: 'weapon', count: 1 },
      { type: 'armor', count: 1 },
      { type: 'accessory', count: 2 },
    ];

    for (const { type, count } of equipmentTypes) {
      for (let i = 0; i < count; i++) {
        try {
          const equipmentData = this.generateEquipmentData(type, rarity, level);
          await this.saveEquipmentToDatabase(equipmentData);
        } catch (error) {
          console.error(`Error generating ${rarity} ${type} equipment at level ${level}:`, error);
          throw error;
        }
      }
    }
  }

  private async generateRegularEquipment(): Promise<void> {
    console.log('⚔️ Generating regular equipment (common, uncommon, rare)...');

    // Calculate how many regular equipment we need
    const specialEquipmentCount = this.calculateSpecialEquipmentCount();
    const regularEquipmentCount = this.config.equipment.count - specialEquipmentCount;

    if (regularEquipmentCount <= 0) {
      console.log('⚠️ No regular equipment needed, all slots filled by special equipment');
      return;
    }

    const { rarityArray, typeArray } = this.generateDistributionArrays(regularEquipmentCount);
    const shuffledRarities = this.shuffleArray(rarityArray);
    const shuffledTypes = this.shuffleArray(typeArray);

    await this.generateEquipmentBatch(shuffledRarities, shuffledTypes, regularEquipmentCount);
  }

  private calculateSpecialEquipmentCount(): number {
    // Calculate legendary equipment count
    const legendaryLevels = Math.floor(40 / 5); // level 5, 10, 15, 20, 25, 30, 35, 40
    const legendaryCount = legendaryLevels * 4; // 1 weapon + 1 armor + 2 accessories per level

    // Calculate epic equipment count
    const epicLevels = Math.floor(40 / 4); // level 4, 8, 12, 16, 20, 24, 28, 32, 36, 40
    const epicCount = epicLevels * 4; // 1 weapon + 1 armor + 2 accessories per level

    return legendaryCount + epicCount;
  }

  private generateDistributionArrays(targetCount: number): {
    rarityArray: Rarity[];
    typeArray: EquipmentType[];
  } {
    // Only include common, uncommon, and rare for regular equipment
    const regularRarityDistribution = {
      common: this.config.equipment.rarityDistribution.common,
      uncommon: this.config.equipment.rarityDistribution.uncommon,
      rare: this.config.equipment.rarityDistribution.rare,
    };

    const totalRarityPercentage = Object.values(regularRarityDistribution).reduce(
      (sum, val) => sum + val,
      0
    );

    const rarityCounts = this.calculateRarityCounts(
      regularRarityDistribution,
      totalRarityPercentage,
      targetCount
    );
    const typeCounts = this.calculateTypeCounts(targetCount);

    const rarityArray = this.buildArrayFromCounts(rarityCounts, targetCount) as Rarity[];
    const typeArray = this.buildArrayFromCounts(typeCounts, targetCount) as EquipmentType[];

    return { rarityArray, typeArray };
  }

  private calculateRarityCounts(
    rarityDistribution: any,
    totalRarityPercentage: number,
    targetCount: number
  ) {
    return {
      common: Math.floor((rarityDistribution.common / totalRarityPercentage) * targetCount),
      uncommon: Math.floor((rarityDistribution.uncommon / totalRarityPercentage) * targetCount),
      rare: Math.floor((rarityDistribution.rare / totalRarityPercentage) * targetCount),
    };
  }

  private calculateTypeCounts(targetCount: number) {
    return {
      weapon: Math.floor((this.config.equipment.typeDistribution.weapon / 100) * targetCount),
      armor: Math.floor((this.config.equipment.typeDistribution.armor / 100) * targetCount),
      accessory: Math.floor((this.config.equipment.typeDistribution.accessory / 100) * targetCount),
    };
  }

  private buildArrayFromCounts<T>(counts: Record<string, number>, targetLength: number): T[] {
    const array: T[] = [];

    Object.entries(counts).forEach(([key, count]) => {
      for (let i = 0; i < count; i++) {
        array.push(key as unknown as T);
      }
    });

    // Ensure array is exactly the right size
    while (array.length < targetLength) {
      const randomKey = getRandomArrayItem(Object.keys(counts));
      array.push(randomKey as unknown as T);
    }

    return array;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  private async generateEquipmentBatch(
    rarities: Rarity[],
    types: EquipmentType[],
    count: number
  ): Promise<void> {
    for (let i = 0; i < count; i++) {
      try {
        const type = types[i];
        const rarity = rarities[i];
        const minLevel = getRandomInRange(
          EQUIPMENT_CONSTANTS.LEVEL_RANGE.min,
          EQUIPMENT_CONSTANTS.LEVEL_RANGE.max
        );

        const equipmentData = this.generateEquipmentData(type, rarity, minLevel);
        await this.saveEquipmentToDatabase(equipmentData);
      } catch (error) {
        console.error(`Error generating equipment ${i + 1}:`, error);
        throw error;
      }
    }
  }

  private generateEquipmentData(type: EquipmentType, rarity: Rarity, minLevel: number) {
    const name = this.generateEquipmentName(type, rarity);
    const totalBonus = this.calculateTotalBonus(minLevel, rarity, type);
    const attributes = this.distributeAttributes(totalBonus, type);
    const { buyPrice, sellPrice } = this.calculatePrices(minLevel, rarity, totalBonus, attributes);
    const dropRate = this.calculateDropRate(rarity, minLevel);
    const description = faker.lorem.sentence();

    return {
      name,
      type,
      rarity,
      minLevel,
      attributes,
      buyPrice,
      sellPrice,
      dropRate,
      description,
    };
  }

  private generateEquipmentName(type: EquipmentType, rarity: Rarity): string {
    const prefix = getRandomArrayItem(EQUIPMENT_CONSTANTS.PREFIXES);
    let baseName: string;

    switch (type) {
      case 'weapon':
        baseName = `${prefix} ${getRandomArrayItem(EQUIPMENT_CONSTANTS.WEAPON_TYPES)}`;
        break;
      case 'armor':
        baseName = `${prefix} ${getRandomArrayItem(EQUIPMENT_CONSTANTS.ARMOR_TYPES)}`;
        break;
      default:
        baseName = `${prefix} ${getRandomArrayItem(EQUIPMENT_CONSTANTS.ACCESSORY_TYPES)}`;
    }

    // Add suffix for rare+ items
    if (rarity === 'rare' || rarity === 'epic' || rarity === 'legendary') {
      baseName += ` ${getRandomArrayItem(EQUIPMENT_CONSTANTS.SUFFIXES)}`;
    }

    return baseName;
  }

  private async saveEquipmentToDatabase(equipmentData: any): Promise<void> {
    await prisma.equipment.create({
      data: {
        name: equipmentData.name,
        type: equipmentData.type as 'weapon' | 'armor' | 'accessory',
        rarity: equipmentData.rarity as 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary',
        min_level: equipmentData.minLevel,
        health_bonus: equipmentData.attributes.health,
        attack_bonus: equipmentData.attributes.attack,
        defense_bonus: equipmentData.attributes.defense,
        speed_bonus: equipmentData.attributes.speed,
        critical_bonus: equipmentData.attributes.critical,
        description: equipmentData.description,
        drop_rate: equipmentData.dropRate,
        buy_price: equipmentData.buyPrice,
        sell_price: equipmentData.sellPrice,
      },
    });
  }

  public calculateTotalBonus(level: number, rarity: Rarity, type?: EquipmentType): number {
    const baseBonusPerLevel = 0.8;
    const rarityMultiplier = RARITY_MULTIPLIERS[rarity as keyof typeof RARITY_MULTIPLIERS] || 1;
    const baseTotal = Math.ceil(level * baseBonusPerLevel * rarityMultiplier);

    // Apply reduction factor for accessories (70% of weapon/armor total)
    let typeMultiplier = 1;
    if (type === 'accessory') {
      typeMultiplier = 0.6;
    }

    const adjustedTotal = baseTotal * typeMultiplier;

    // Add randomness (±15%)
    const variance = 0.15;
    const minBonus = Math.floor(adjustedTotal * (1 - variance));
    const maxBonus = Math.floor(adjustedTotal * (1 + variance));

    return Math.ceil(getRandomInRange(minBonus, maxBonus));
  }

  public distributeAttributes(
    totalBonus: number,
    type: EquipmentType
  ): {
    health: number;
    attack: number;
    defense: number;
    speed: number;
    critical: number;
  } {
    const attributes = ['health', 'attack', 'defense', 'speed', 'critical'];
    const distribution: { [key: string]: number } = {
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      critical: 0,
    };

    let remainingBonus = totalBonus;
    const maxPerAttribute = Math.max(
      1,
      Math.floor(totalBonus * EQUIPMENT_CONSTANTS.MAX_ATTRIBUTE_PERCENTAGE)
    );

    const weights = TYPE_WEIGHTS[type as keyof typeof TYPE_WEIGHTS];

    // First pass: distribute based on weights
    for (const attr of attributes) {
      const weight = weights[attr as keyof typeof weights];
      const baseAllocation = Math.floor(totalBonus * weight * 0.9); // Increased from 0.8 to 0.9 for better distribution
      const allocation = Math.min(baseAllocation, maxPerAttribute);
      distribution[attr] = allocation;
      remainingBonus -= allocation;
    }

    // Second pass: distribute remaining bonus randomly with safety counter
    let safetyCounter = 0;
    const maxIterations = totalBonus * 10 + 50;
    while (remainingBonus > 0 && safetyCounter < maxIterations) {
      safetyCounter++;
      const randomAttr = getRandomArrayItem(attributes);
      const currentValue = distribution[randomAttr];

      if (currentValue >= maxPerAttribute) {
        continue;
      }

      const increment = Math.min(
        getRandomInRange(1, Math.max(1, Math.floor(remainingBonus * 0.3))),
        maxPerAttribute - currentValue,
        remainingBonus
      );

      distribution[randomAttr] += increment;
      remainingBonus -= increment;
    }

    // Final pass: round-robin distribution if anything remains
    if (remainingBonus > 0) {
      let idx = 0;
      while (remainingBonus > 0 && idx < 1000) {
        const attr = attributes[idx % attributes.length];
        if (distribution[attr] < maxPerAttribute) {
          distribution[attr] += 1;
          remainingBonus -= 1;
        }
        idx++;
      }
    }

    return {
      health: distribution.health * 10, // Health is 10x multiplier
      attack: distribution.attack,
      defense: distribution.defense,
      speed: distribution.speed,
      critical: distribution.critical,
    };
  }

  public calculatePrices(
    level: number,
    rarity: Rarity,
    totalBonus: number,
    attributes?: {
      health: number;
      attack: number;
      defense: number;
      speed: number;
      critical: number;
    }
  ): {
    buyPrice: number;
    sellPrice: number;
  } {
    // Calculate total attributes value (health is 10x multiplier)
    let totalAttributesValue: number;

    if (attributes) {
      // Use actual distributed attributes if provided
      totalAttributesValue =
        attributes.health +
        attributes.attack +
        attributes.defense +
        attributes.speed +
        attributes.critical;
    } else {
      // Fallback calculation (health is already 10x in distributeAttributes)
      totalAttributesValue = totalBonus * 10;
    }

    const basePrice = level * 100 + totalAttributesValue * 5;
    const rarityMultiplier =
      RARITY_PRICE_MULTIPLIERS[rarity as keyof typeof RARITY_PRICE_MULTIPLIERS] || 1;
    const baseBuyPrice = basePrice * rarityMultiplier;

    // Add randomness to buy price
    const minBuyPrice = Math.floor(baseBuyPrice * (1 - EQUIPMENT_CONSTANTS.PRICE_VARIANCE));
    const maxBuyPrice = Math.floor(baseBuyPrice * (1 + EQUIPMENT_CONSTANTS.PRICE_VARIANCE));
    const buyPrice = getRandomInRange(minBuyPrice, maxBuyPrice);

    // Calculate sell price as percentage of buy price
    const sellPriceRatio =
      getRandomInRange(
        EQUIPMENT_CONSTANTS.SELL_PRICE_RATIO_RANGE.min,
        EQUIPMENT_CONSTANTS.SELL_PRICE_RATIO_RANGE.max
      ) / 100;
    const sellPrice = Math.floor(buyPrice * sellPriceRatio);

    return { buyPrice, sellPrice };
  }

  public calculateDropRate(rarity: Rarity, level: number): number {
    const baseRate = BASE_DROP_RATES[rarity as keyof typeof BASE_DROP_RATES] || 0.01;

    // Level adjustment: higher level items are slightly rarer
    const levelAdjustment = Math.max(0.5, 1 - (level - 1) * 0.005);

    // Add randomness
    const minRate = baseRate * levelAdjustment * (1 - EQUIPMENT_CONSTANTS.DROP_RATE_VARIANCE);
    const maxRate = baseRate * levelAdjustment * (1 + EQUIPMENT_CONSTANTS.DROP_RATE_VARIANCE);

    const dropRate = Math.random() * (maxRate - minRate) + minRate;

    // Ensure drop rate is within reasonable bounds
    return Math.max(0.001, Math.min(0.5, dropRate));
  }
}
