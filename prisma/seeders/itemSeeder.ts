import { faker } from '@faker-js/faker';
import type { Rarity } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import type { SeederConfig } from './config';
import { getRandomArrayItem, getRandomByDistribution } from './config';

export class ItemSeeder {
  private config: SeederConfig;

  constructor(config: SeederConfig) {
    this.config = config;
  }

  async seed(): Promise<void> {
    console.log(`📦 Seeding ${this.config.items.count} items...`);

    const itemTypes = {
      consumable: [
        'Potion',
        'Elixir',
        'Scroll',
        'Crystal',
        'Essence',
        'Tonic',
        'Brew',
        'Extract',
        'Concoction',
        'Remedy',
      ],
      buff: [
        'Elixir',
        'Potion',
        'Tonic',
        'Essence',
        'Extract',
        'Concoction',
        'Brew',
        'Crystal',
        'Scroll',
        'Remedy',
      ],
      special: [
        'Scroll',
        'Crystal',
        'Essence',
        'Charm',
        'Talisman',
        'Relic',
        'Artifact',
        'Orb',
        'Gem',
        'Stone',
      ],
    };

    const effects = [
      'Health',
      'Mana',
      'Strength',
      'Defense',
      'Speed',
      'Critical',
      'Experience',
      'Gold',
      'Luck',
      'Wisdom',
    ];

    for (let i = 0; i < this.config.items.count; i++) {
      const type = getRandomByDistribution(this.config.items.typeDistribution) as string;
      const rarity = getRandomByDistribution(this.config.items.rarityDistribution) as Rarity;

      const baseType = getRandomArrayItem(itemTypes[type as keyof typeof itemTypes]);
      const effect = getRandomArrayItem(effects);
      const name = `${effect} ${baseType}`;

      const description = faker.lorem.sentence();
      const effectValue = this.getItemEffectValue(type, rarity);
      const dropRate = this.getDropRateByRarity(rarity);

      await prisma.item.create({
        data: {
          name,
          type,
          description,
          effect_value: effectValue,
          rarity: rarity as 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary',
          drop_rate: dropRate,
        },
      });
    }

    console.log('✅ Successfully seeded items');
  }

  private getDropRateByRarity(rarity: Rarity): number {
    const dropRates = {
      common: 0.15,
      uncommon: 0.08,
      rare: 0.04,
      epic: 0.02,
      legendary: 0.005,
    };

    return dropRates[rarity as keyof typeof dropRates] || 0;
  }

  private getItemEffectValue(type: string, rarity: Rarity): number {
    const baseValues = {
      consumable: 50,
      buff: 10,
      special: 1,
    };

    const rarityMultipliers = {
      common: 1,
      uncommon: 1.5,
      rare: 2,
      epic: 3,
      legendary: 5,
    };

    const baseValue = baseValues[type as keyof typeof baseValues] || 1;
    const rarityMultiplier = rarityMultipliers[rarity as keyof typeof rarityMultipliers] || 1;

    return Math.floor(baseValue * rarityMultiplier);
  }
}
