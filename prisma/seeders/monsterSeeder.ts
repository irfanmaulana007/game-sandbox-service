import { faker } from '@faker-js/faker';
import type { MonsterRank } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import type { SeederConfig } from './config';
import { getRandomArrayItem, getRandomByDistribution, getRandomInRange } from './config';

export class MonsterSeeder {
  private config: SeederConfig;

  constructor(config: SeederConfig) {
    this.config = config;
  }

  async seed(): Promise<void> {
    const mapZones = await prisma.gameMapZone.findMany({
      include: {
        map: true,
      },
    });
    console.log(`👹 Seeding ${this.config.monsters.count * mapZones.length} monsters...`);

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

    for (const mapZone of mapZones) {
      const totalMonster = getRandomInRange(
        this.config.monsters.count * 0.8,
        this.config.monsters.count * 1.2
      );

      for (let i = 0; i < totalMonster; i++) {
        const name = `${faker.word.adjective()} ${getRandomArrayItem(monsterTypes)}`;
        const level = getRandomInRange(mapZone.map.min_level, mapZone.map.max_level);
        const rank = getRandomByDistribution(this.config.monsters.rankDistribution) as MonsterRank;

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

        // Create monster details
        const description = faker.lorem.sentence();
        const imageUrl = `${rank}_monster_${name}.jpg`;
        const dropTable = this.generateDropTable(rank);

        const monsterDetail = await prisma.monsterDetails.create({
          data: {
            map_zone_id: mapZone.id,
            name,
            description,
            image_url: imageUrl,
            drop_table: dropTable,
          },
        });

        await prisma.monster.create({
          data: {
            monster_detail_id: monsterDetail.id,
            rank,
            level,
            health,
            attack,
            defense,
            speed,
            critical,
            experience_reward: experienceReward,
            gold_reward: goldReward,
          },
        });
      }
    }

    console.log('✅ Successfully seeded monsters');
  }

  private generateDropTable(rank: MonsterRank): any {
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
}
