import { faker } from '@faker-js/faker';
import type { EquipmentType, Rarity } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import type { SeederConfig } from './config';
import { getRandomArrayItem, getRandomByDistribution } from './config';

export class EquipmentSeeder {
  private config: SeederConfig;

  constructor(config: SeederConfig) {
    this.config = config;
  }

  async seed(): Promise<void> {
    console.log(`⚔️ Seeding ${this.config.equipment.count} equipment...`);

    const weaponTypes = [
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
    ];
    const armorTypes = [
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
    ];
    const accessoryTypes = [
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
    ];

    const prefixes = [
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
    ];
    const suffixes = [
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
    ];

    for (let i = 0; i < this.config.equipment.count; i++) {
      const type = getRandomByDistribution(this.config.equipment.typeDistribution) as EquipmentType;
      const rarity = getRandomByDistribution(this.config.equipment.rarityDistribution) as Rarity;

      let name: string;

      if (type === 'weapon') {
        name = `${getRandomArrayItem(prefixes)} ${getRandomArrayItem(weaponTypes)}`;
      } else if (type === 'armor') {
        name = `${getRandomArrayItem(prefixes)} ${getRandomArrayItem(armorTypes)}`;
      } else {
        name = `${getRandomArrayItem(prefixes)} ${getRandomArrayItem(accessoryTypes)}`;
      }

      // Add suffix based on rarity
      if (rarity === 'rare' || rarity === 'epic' || rarity === 'legendary') {
        name += ` ${getRandomArrayItem(suffixes)}`;
      }

      const minLevel =
        rarity === 'common'
          ? 1
          : rarity === 'uncommon'
            ? 5
            : rarity === 'rare'
              ? 10
              : rarity === 'epic'
                ? 20
                : 35;

      // Generate stats based on rarity and type
      const rarityMultiplier =
        rarity === 'common'
          ? 1
          : rarity === 'uncommon'
            ? 1.5
            : rarity === 'rare'
              ? 2
              : rarity === 'epic'
                ? 3
                : 5;
      const typeMultiplier = type === 'weapon' ? 1.2 : type === 'armor' ? 1 : 0.8;

      const healthBonus = type === 'armor' ? Math.floor(20 * rarityMultiplier * typeMultiplier) : 0;
      const attackBonus =
        type === 'weapon' ? Math.floor(10 * rarityMultiplier * typeMultiplier) : 0;
      const defenseBonus = type === 'armor' ? Math.floor(8 * rarityMultiplier * typeMultiplier) : 0;
      const speedBonus =
        type === 'accessory' ? Math.floor(5 * rarityMultiplier * typeMultiplier) : 0;
      const criticalBonus =
        type === 'weapon' || type === 'accessory'
          ? Math.floor(3 * rarityMultiplier * typeMultiplier)
          : 0;

      const description = faker.lorem.sentence();
      const dropRate = this.getDropRateByRarity(rarity);

      await prisma.equipment.create({
        data: {
          name,
          type: type as 'weapon' | 'armor' | 'accessory',
          rarity: rarity as 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary',
          min_level: minLevel,
          health_bonus: healthBonus,
          attack_bonus: attackBonus,
          defense_bonus: defenseBonus,
          speed_bonus: speedBonus,
          critical_bonus: criticalBonus,
          description,
          drop_rate: dropRate,
        },
      });
    }

    console.log('✅ Successfully seeded equipment');
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
}
