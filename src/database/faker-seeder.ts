import { faker } from '@faker-js/faker';
import { prisma } from './prisma';
import type { SeederConfig } from './seeder.config';
import {
  defaultSeederConfig,
  getRandomArrayItem,
  getRandomByDistribution,
  getRandomInRange,
} from './seeder.config';

export class FakerSeeder {
  private config: SeederConfig;

  constructor(config: SeederConfig = defaultSeederConfig) {
    this.config = config;
  }

  async seedAll(): Promise<void> {
    console.log('🚀 Starting Faker-based database seeding...');

    try {
      // Seed in order to maintain referential integrity
      await this.seedJobClasses();
      await this.seedExperienceLevels();
      // await this.seedUsers();
      await this.seedMaps();
      await this.seedMonsters();
      await this.seedEquipment();
      await this.seedItems();
      // await this.seedCharacters();
      // await this.seedBattleLogs();

      console.log('🎉 All seeding completed successfully!');
    } catch (error) {
      console.error('❌ Seeding failed:', error);
      throw error;
    }
  }

  private async seedJobClasses(): Promise<void> {
    console.log('📚 Seeding job classes...');

    const jobClasses = [
      {
        name: 'Barbarian',
        description: 'High defense warrior with balanced stats',
        baseHealth: 120,
        baseAttack: 15,
        baseDefense: 20,
        baseSpeed: 10,
        baseCritical: 5,
        healthPerLevel: 12,
        attackPerLevel: 2,
        defensePerLevel: 3,
        speedPerLevel: 1,
        criticalPerLevel: 1,
      },
      {
        name: 'Swordsman',
        description: 'Balanced fighter with good attack and defense',
        baseHealth: 100,
        baseAttack: 18,
        baseDefense: 18,
        baseSpeed: 12,
        baseCritical: 8,
        healthPerLevel: 10,
        attackPerLevel: 2,
        defensePerLevel: 2,
        speedPerLevel: 1,
        criticalPerLevel: 1,
      },
      {
        name: 'Archer',
        description: 'Ranged fighter with high speed and critical',
        baseHealth: 80,
        baseAttack: 20,
        baseDefense: 12,
        baseSpeed: 18,
        baseCritical: 15,
        healthPerLevel: 8,
        attackPerLevel: 2,
        defensePerLevel: 1,
        speedPerLevel: 2,
        criticalPerLevel: 2,
      },
      {
        name: 'Ninja',
        description: 'Stealth fighter with highest speed and critical',
        baseHealth: 70,
        baseAttack: 22,
        baseDefense: 10,
        baseSpeed: 22,
        baseCritical: 20,
        healthPerLevel: 7,
        attackPerLevel: 2,
        defensePerLevel: 1,
        speedPerLevel: 3,
        criticalPerLevel: 3,
      },
    ];

    for (const jobClass of jobClasses) {
      await prisma.jobClass.upsert({
        where: { name: jobClass.name },
        update: {},
        create: {
          name: jobClass.name,
          description: jobClass.description,
          baseHealth: jobClass.baseHealth,
          baseAttack: jobClass.baseAttack,
          baseDefense: jobClass.baseDefense,
          baseSpeed: jobClass.baseSpeed,
          baseCritical: jobClass.baseCritical,
          healthPerLevel: jobClass.healthPerLevel,
          attackPerLevel: jobClass.attackPerLevel,
          defensePerLevel: jobClass.defensePerLevel,
          speedPerLevel: jobClass.speedPerLevel,
          criticalPerLevel: jobClass.criticalPerLevel,
        },
      });
    }
  }

  private async seedExperienceLevels(): Promise<void> {
    console.log('📊 Seeding experience levels...');

    const experienceLevels = [
      { level: 1, experience: 0 },
      { level: 2, experience: 300 },
      { level: 3, experience: 750 },
      { level: 4, experience: 1500 },
      { level: 5, experience: 2800 },
      { level: 6, experience: 4500 },
      { level: 7, experience: 7000 },
      { level: 8, experience: 10500 },
      { level: 9, experience: 15000 },
      { level: 10, experience: 21000 },
      { level: 11, experience: 28500 },
      { level: 12, experience: 37500 },
      { level: 13, experience: 48000 },
      { level: 14, experience: 60000 },
      { level: 15, experience: 75000 },
      { level: 16, experience: 93000 },
      { level: 17, experience: 114000 },
      { level: 18, experience: 138000 },
      { level: 19, experience: 165000 },
      { level: 20, experience: 195000 },
      { level: 21, experience: 228000 },
      { level: 22, experience: 264000 },
      { level: 23, experience: 303000 },
      { level: 24, experience: 345000 },
      { level: 25, experience: 390000 },
      { level: 26, experience: 438000 },
      { level: 27, experience: 489000 },
      { level: 28, experience: 543000 },
      { level: 29, experience: 600000 },
      { level: 30, experience: 660000 },
      { level: 31, experience: 723000 },
      { level: 32, experience: 789000 },
      { level: 33, experience: 858000 },
      { level: 34, experience: 930000 },
      { level: 35, experience: 1005000 },
      { level: 36, experience: 1083000 },
      { level: 37, experience: 1164000 },
      { level: 38, experience: 1248000 },
      { level: 39, experience: 1335000 },
      { level: 40, experience: 1425000 },
      { level: 41, experience: 1518000 },
      { level: 42, experience: 1614000 },
      { level: 43, experience: 1713000 },
      { level: 44, experience: 1815000 },
      { level: 45, experience: 1920000 },
      { level: 46, experience: 2028000 },
      { level: 47, experience: 2139000 },
      { level: 48, experience: 2253000 },
      { level: 49, experience: 2370000 },
      { level: 50, experience: 2490000 },
      { level: 51, experience: 2613000 },
      { level: 52, experience: 2739000 },
      { level: 53, experience: 2868000 },
      { level: 54, experience: 3000000 },
      { level: 55, experience: 3135000 },
      { level: 56, experience: 3273000 },
      { level: 57, experience: 3414000 },
      { level: 58, experience: 3558000 },
      { level: 59, experience: 3705000 },
      { level: 60, experience: 3855000 },
      { level: 61, experience: 4008000 },
      { level: 62, experience: 4164000 },
      { level: 63, experience: 4323000 },
      { level: 64, experience: 4485000 },
      { level: 65, experience: 4650000 },
      { level: 66, experience: 4818000 },
      { level: 67, experience: 4989000 },
      { level: 68, experience: 5163000 },
      { level: 69, experience: 5340000 },
      { level: 70, experience: 5520000 },
      { level: 71, experience: 5703000 },
      { level: 72, experience: 5889000 },
      { level: 73, experience: 6078000 },
      { level: 74, experience: 6270000 },
      { level: 75, experience: 6465000 },
      { level: 76, experience: 6663000 },
      { level: 77, experience: 6864000 },
      { level: 78, experience: 7068000 },
      { level: 79, experience: 7275000 },
      { level: 80, experience: 7485000 },
      { level: 81, experience: 7698000 },
      { level: 82, experience: 7914000 },
      { level: 83, experience: 8133000 },
      { level: 84, experience: 8355000 },
      { level: 85, experience: 8580000 },
      { level: 86, experience: 8808000 },
      { level: 87, experience: 9039000 },
      { level: 88, experience: 9273000 },
      { level: 89, experience: 9510000 },
      { level: 90, experience: 9750000 },
      { level: 91, experience: 9993000 },
      { level: 92, experience: 10239000 },
      { level: 93, experience: 10488000 },
      { level: 94, experience: 10740000 },
      { level: 95, experience: 10995000 },
      { level: 96, experience: 11253000 },
      { level: 97, experience: 11514000 },
      { level: 98, experience: 11778000 },
      { level: 99, experience: 12045000 },
    ];

    // Create all experience levels
    const createdLevels = await prisma.experienceLevel.createMany({
      data: experienceLevels,
    });

    console.log(`✅ Successfully seeded ${createdLevels.count} experience levels`);
  }

  // private async seedUsers(): Promise<void> {
  //   console.log(`👥 Seeding ${this.config.users.count} users...`);

  //   const saltRounds = 12;
  //   const passwordHash = await bcrypt.hash(this.config.users.defaultPassword, saltRounds);

  //   for (let i = 0; i < this.config.users.count; i++) {
  //     // const username = faker.internet.userName();
  //     const username = 'irfanmaulana007';
  //     const email = faker.internet.email();

  //     await prisma.user.upsert({
  //       where: { username },
  //       update: {},
  //       create: {
  //         username,
  //         email,
  //         passwordHash,
  //       },
  //     });
  //   }
  // }

  private async seedMaps(): Promise<void> {
    console.log(`🗺️ Seeding ${this.config.maps.count} maps...`);

    const mapTypes = [
      { prefix: 'Forest of', suffix: 'Beginnings' },
      { prefix: 'Dark', suffix: 'Cave' },
      { prefix: 'Mountain', suffix: 'Peak' },
      { prefix: 'Abyss', suffix: 'Depths' },
      { prefix: 'Ancient', suffix: 'Ruins' },
      { prefix: 'Crystal', suffix: 'Cavern' },
      { prefix: 'Frozen', suffix: 'Wasteland' },
      { prefix: 'Desert', suffix: 'Oasis' },
      { prefix: 'Volcanic', suffix: 'Chamber' },
      { prefix: 'Mystic', suffix: 'Grove' },
    ];

    for (let i = 0; i < this.config.maps.count; i++) {
      const mapType = getRandomArrayItem(mapTypes);
      const difficulty = getRandomByDistribution(this.config.maps.difficultyDistribution) as string;
      const minLevel =
        difficulty === 'easy' ? 1 : difficulty === 'normal' ? 5 : difficulty === 'hard' ? 15 : 30;
      const maxLevel =
        difficulty === 'easy' ? 10 : difficulty === 'normal' ? 20 : difficulty === 'hard' ? 35 : 99;

      const name = `${mapType.prefix} ${faker.word.adjective()} ${mapType.suffix}`;
      const description = faker.lorem.paragraph();
      const backgroundImage = `${difficulty}_bg_${i + 1}.jpg`;

      await prisma.gameMap.create({
        data: {
          name,
          description,
          minLevel,
          maxLevel,
          difficulty: difficulty as 'easy' | 'normal' | 'hard' | 'extreme',
          backgroundImage,
        },
      });
    }
  }

  private async seedMonsters(): Promise<void> {
    console.log(`👹 Seeding ${this.config.monsters.count} monsters...`);

    const monsterTypes = [
      'Goblin',
      'Wolf',
      'Bandit',
      'Orc',
      'Troll',
      'Dragon',
      'Demon',
      'Skeleton',
      'Zombie',
      'Vampire',
      'Werewolf',
      'Giant',
      'Dwarf',
      'Elf',
      'Fairy',
      'Imp',
      'Harpy',
      'Minotaur',
      'Centaur',
      'Phoenix',
    ];

    for (let i = 0; i < this.config.monsters.count; i++) {
      const name = `${faker.word.adjective()} ${getRandomArrayItem(monsterTypes)}`;
      const level = getRandomInRange(
        this.config.monsters.levelRange.min,
        this.config.monsters.levelRange.max
      );
      const rank = getRandomByDistribution(this.config.monsters.rankDistribution) as string;

      // Scale stats based on level and rank
      const rankMultiplier =
        rank === 'normal' ? 1 : rank === 'elite' ? 1.5 : rank === 'boss' ? 2.5 : 4;
      const health = Math.floor(50 + level * 15 * rankMultiplier);
      const attack = Math.floor(8 + level * 2 * rankMultiplier);
      const defense = Math.floor(5 + level * 1.5 * rankMultiplier);
      const speed = Math.floor(6 + level * 1 * rankMultiplier);
      const critical = Math.floor(3 + level * 0.5 * rankMultiplier);

      const experienceReward = Math.floor(25 + level * 10 * rankMultiplier);
      const goldReward = Math.floor(10 + level * 5 * rankMultiplier);

      // Randomly assign to a map
      const map = await prisma.gameMap.findFirst({
        orderBy: { id: 'asc' },
      });
      const mapId = map?.id || 1;

      const monster = await prisma.monster.create({
        data: {
          name,
          level,
          health,
          attack,
          defense,
          speed,
          critical,
          experienceReward,
          goldReward,
          mapId,
        },
      });

      // Create monster details
      const description = faker.lorem.sentence();
      const imageUrl = `${rank}_monster_${i + 1}.jpg`;
      const dropTable = this.generateDropTable(rank);

      await prisma.monsterDetails.create({
        data: {
          monsterId: monster.id,
          rank: rank as 'normal' | 'elite' | 'boss' | 'legendary',
          description,
          imageUrl,
          dropTable,
        },
      });
    }
  }

  private async seedEquipment(): Promise<void> {
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
      const type = getRandomByDistribution(this.config.equipment.typeDistribution) as string;
      const rarity = getRandomByDistribution(this.config.equipment.rarityDistribution) as string;

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
          minLevel,
          healthBonus,
          attackBonus,
          defenseBonus,
          speedBonus,
          criticalBonus,
          description,
          dropRate,
        },
      });
    }
  }

  private async seedItems(): Promise<void> {
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
      const rarity = getRandomByDistribution(this.config.items.rarityDistribution) as string;

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
          effectValue,
          rarity: rarity as 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary',
          dropRate,
        },
      });
    }
  }

  // private async seedCharacters(): Promise<void> {
  //   console.log(`👤 Seeding ${this.config.characters.count} characters...`);

  //   // Get all users and job classes
  //   const users = await prisma.user.findMany({ select: { id: true } });
  //   const jobClasses = await prisma.jobClass.findMany({
  //     select: {
  //       id: true,
  //       baseHealth: true,
  //       baseAttack: true,
  //       baseDefense: true,
  //       baseSpeed: true,
  //       baseCritical: true,
  //       healthPerLevel: true,
  //       attackPerLevel: true,
  //       defensePerLevel: true,
  //       speedPerLevel: true,
  //       criticalPerLevel: true,
  //     },
  //   });

  //   if (users.length === 0 || jobClasses.length === 0) {
  //     console.log('⚠️ No users or job classes found, skipping character creation');

  //     return;
  //   }

  //   for (let i = 0; i < this.config.characters.count; i++) {
  //     const user = getRandomArrayItem(users);
  //     const jobClass = getRandomArrayItem(jobClasses);

  //     // Generate character name
  //     const firstName = faker.person.firstName();
  //     const lastName = faker.person.lastName();
  //     const name = `${firstName} ${lastName}`;

  //     const level = getRandomInRange(1, 50);
  //     const experience = this.calculateExperienceForLevel(level);

  //     // Calculate stats based on job class and level
  //     const health = jobClass.baseHealth + jobClass.healthPerLevel * (level - 1);
  //     const attack = jobClass.baseAttack + jobClass.attackPerLevel * (level - 1);
  //     const defense = jobClass.baseDefense + jobClass.defensePerLevel * (level - 1);
  //     const speed = jobClass.baseSpeed + jobClass.speedPerLevel * (level - 1);
  //     const critical = jobClass.baseCritical + jobClass.criticalPerLevel * (level - 1);

  //     const statusPoints = Math.floor(level * 0.5); // Some characters have unallocated points
  //     const gold = getRandomInRange(0, level * 100);

  //     await prisma.character.create({
  //       data: {
  //         userId: user.id,
  //         name,
  //         jobId: jobClass.id,
  //         level,
  //         experience,
  //         health,
  //         maxHealth: health,
  //         attack,
  //         defense,
  //         speed,
  //         critical,
  //         statusPoints,
  //         gold,
  //       },
  //     });
  //   }
  // }

  // private async seedBattleLogs(): Promise<void> {
  //   console.log(`⚔️ Seeding ${this.config.battleLogs.count} battle logs...`);

  //   // Get all characters and monsters
  //   const characters = await prisma.character.findMany({ select: { id: true } });
  //   const monsters = await prisma.monster.findMany({ select: { id: true } });

  //   if (characters.length === 0 || monsters.length === 0) {
  //     console.log('⚠️ No characters or monsters found, skipping battle log creation');

  //     return;
  //   }

  //   for (let i = 0; i < this.config.battleLogs.count; i++) {
  //     const character = getRandomArrayItem(characters);
  //     const monster = getRandomArrayItem(monsters);

  //     const battleResult = Math.random() > 0.3 ? 'victory' : 'defeat'; // 70% victory rate
  //     const turnsTaken = getRandomInRange(1, 20);
  //     const experienceGained = getRandomInRange(10, 200);
  //     const goldGained = getRandomInRange(5, 100);

  //     // Generate random health remaining
  //     const characterHealthRemaining = battleResult === 'victory' ? getRandomInRange(1, 100) : 0;
  //     const monsterHealthRemaining = battleResult === 'victory' ? 0 : getRandomInRange(1, 100);

  //     // Generate random battle date within the specified range
  //     const battleDate = faker.date.between({
  //       from: this.config.battleLogs.dateRange.start,
  //       to: this.config.battleLogs.dateRange.end,
  //     });

  //     await prisma.battleLog.create({
  //       data: {
  //         characterId: character.id,
  //         monsterId: monster.id,
  //         battleResult: battleResult as 'victory' | 'defeat',
  //         characterHealthRemaining,
  //         monsterHealthRemaining,
  //         turnsTaken,
  //         experienceGained,
  //         goldGained,
  //         battleDate,
  //       },
  //     });
  //   }
  // }

  private generateDropTable(rank: string): any {
    const dropRates = {
      normal: { equipment: 0.1, items: 0.15 },
      elite: { equipment: 0.2, items: 0.25 },
      boss: { equipment: 0.4, items: 0.5 },
      legendary: { equipment: 0.6, items: 0.7 },
    };

    return {
      equipment: dropRates[rank as keyof typeof dropRates].equipment,
      items: dropRates[rank as keyof typeof dropRates].items,
      gold_multiplier: rank === 'normal' ? 1 : rank === 'elite' ? 1.5 : rank === 'boss' ? 2 : 3,
    };
  }

  private getDropRateByRarity(rarity: string): number {
    const dropRates = {
      common: 0.15,
      uncommon: 0.08,
      rare: 0.04,
      epic: 0.02,
      legendary: 0.005,
    };

    return dropRates[rarity as keyof typeof dropRates];
  }

  private getItemEffectValue(type: string, rarity: string): number {
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

  private calculateExperienceForLevel(level: number): number {
    // Simple experience calculation
    return Math.floor(level * level * 100);
  }
}

// Export default instance
export const fakerSeeder = new FakerSeeder();

// Run seeder if this file is executed directly
if (require.main === module) {
  fakerSeeder
    .seedAll()
    .then(() => {
      console.log('✅ Faker seeding complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Faker seeding failed:', error);
      process.exit(1);
    });
}
