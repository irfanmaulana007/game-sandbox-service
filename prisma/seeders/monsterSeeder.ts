import { faker } from '@faker-js/faker';
import { MonsterRank } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import type { SeederConfig } from './config';
import { getRandomArrayItem, getRandomByDistribution, getRandomInRange } from './config';

interface AttributeRange {
  min: number;
  max: number;
}

interface RankLevelConfig {
  minLevel: number;
  maxLevel: number;
  multiplier: number;
}

interface MonsterAttributes {
  health: number;
  attack: number;
  defense: number;
  speed: number;
  critical: number;
}

export class MonsterSeeder {
  private config: SeederConfig;
  private readonly monsterTypes = [
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

  private readonly attributeRanges: AttributeRange[] = [
    { min: 0.25, max: 0.45 }, // Attack: 25-45%
    { min: 0.2, max: 0.35 }, // Defense: 20-35%
    { min: 0.15, max: 0.3 }, // Speed: 15-30%
    { min: 0.1, max: 0.25 }, // Critical: 10-25%
  ];

  private readonly attributeTypes = ['attack', 'defense', 'speed', 'critical'];
  private readonly minAttributePoints = 5;
  private readonly totalVariation = 0.15;

  constructor(config: SeederConfig) {
    this.config = config;
  }

  async seed(): Promise<void> {
    const ranks = Object.values(MonsterRank);
    const mapZones = await this.getMapZones();

    console.log(
      `👹 Seeding ${this.config.monsters.count * mapZones.length * ranks.length} monsters...`
    );

    for (const mapZone of mapZones) {
      await this.seedMonstersForMapZone(mapZone, ranks);
    }

    console.log('✅ Successfully seeded monsters');
  }

  private async getMapZones() {
    return await prisma.gameMapZone.findMany({
      include: {
        map: true,
      },
    });
  }

  private async seedMonstersForMapZone(mapZone: any, ranks: MonsterRank[]): Promise<void> {
    const totalMonster = this.calculateMonsterCount();

    for (let i = 0; i < totalMonster; i++) {
      await this.createMonsterWithAllRanks(mapZone, ranks);
    }
  }

  private calculateMonsterCount(): number {
    return getRandomInRange(this.config.monsters.count * 0.8, this.config.monsters.count * 1.2);
  }

  private async createMonsterWithAllRanks(mapZone: any, ranks: MonsterRank[]): Promise<void> {
    const monsterDetail = await this.createMonsterDetail(mapZone);

    for (const rank of ranks) {
      await this.createMonsterForRank(monsterDetail, rank, mapZone);
    }
  }

  private async createMonsterDetail(mapZone: any) {
    const name = this.generateMonsterName();
    const rank = getRandomByDistribution(this.config.monsters.rankDistribution) as MonsterRank;
    const description = faker.lorem.sentence();
    const imageUrl = `${rank}_monster_${name}.jpg`;
    const dropTable = this.generateDropTable(rank);

    return await prisma.monsterDetails.create({
      data: {
        map_zone_id: mapZone.id,
        name,
        description,
        image_url: imageUrl,
        drop_table: dropTable,
      },
    });
  }

  private generateMonsterName(): string {
    const adjective = faker.word.adjective();
    const capitalizedAdjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
    return `${capitalizedAdjective} ${getRandomArrayItem(this.monsterTypes)}`;
  }

  private async createMonsterForRank(
    monsterDetail: any,
    rank: MonsterRank,
    mapZone: any
  ): Promise<void> {
    const rankConfig = this.getRankLevelConfig(rank, mapZone);
    const monsterLevel = getRandomInRange(rankConfig.minLevel, rankConfig.maxLevel);

    const attributes = this.calculateBalancedAttributes(monsterLevel, rankConfig.multiplier);
    const rewards = this.calculateRewards(monsterLevel, rankConfig.multiplier);

    await prisma.monster.create({
      data: {
        monster_detail_id: monsterDetail.id,
        rank,
        level: monsterLevel,
        ...attributes,
        ...rewards,
      },
    });
  }

  private getRankLevelConfig(rank: MonsterRank, mapZone: any): RankLevelConfig {
    const mapMinLevel = mapZone.map.min_level;
    const mapMaxLevel = mapZone.map.max_level;
    const levelRange = mapMaxLevel - mapMinLevel;

    switch (rank) {
      case MonsterRank.normal:
        return {
          minLevel: mapMinLevel,
          maxLevel: mapMinLevel + Math.floor(levelRange * 0.25),
          multiplier: 0.8,
        };
      case MonsterRank.elite:
        return {
          minLevel: mapMinLevel + Math.floor(levelRange * 0.25) + 1,
          maxLevel: mapMinLevel + Math.floor(levelRange * 0.5),
          multiplier: 1.0,
        };
      case MonsterRank.boss:
        return {
          minLevel: mapMinLevel + Math.floor(levelRange * 0.5) + 1,
          maxLevel: mapMinLevel + Math.floor(levelRange * 0.75),
          multiplier: 1.2,
        };
      case MonsterRank.legendary:
        return {
          minLevel: mapMinLevel + Math.floor(levelRange * 0.75) + 1,
          maxLevel: mapMaxLevel,
          multiplier: 1.5,
        };
      default:
        return {
          minLevel: mapMinLevel,
          maxLevel: mapMaxLevel,
          multiplier: 1.0,
        };
    }
  }

  private calculateBalancedAttributes(level: number, rankMultiplier: number): MonsterAttributes {
    const totalAttributePoints = this.calculateTotalAttributePoints(level, rankMultiplier);
    const combatAttributes = this.distributeCombatAttributes(totalAttributePoints);
    const health = this.calculateHealth(totalAttributePoints);

    return {
      health,
      attack: combatAttributes.attack,
      defense: combatAttributes.defense,
      speed: combatAttributes.speed,
      critical: combatAttributes.critical,
    };
  }

  private calculateTotalAttributePoints(level: number, rankMultiplier: number): number {
    const baseAttributePoints = 30 + level * 5;
    const baseTotalPoints = Math.floor(baseAttributePoints * rankMultiplier);

    const minTotalPoints = Math.floor(baseTotalPoints * (1 - this.totalVariation));
    const maxTotalPoints = Math.floor(baseTotalPoints * (1 + this.totalVariation));

    return getRandomInRange(minTotalPoints, maxTotalPoints);
  }

  private distributeCombatAttributes(totalAttributePoints: number): Record<string, number> {
    const reservedPoints = this.minAttributePoints * this.attributeTypes.length;
    let remainingPoints = totalAttributePoints - reservedPoints;

    // Initialize attributes with minimum values
    const attributes: Record<string, number> = {};
    this.attributeTypes.forEach(type => {
      attributes[type] = this.minAttributePoints;
    });

    // Adjust if insufficient points
    if (remainingPoints < 0) {
      const adjustedTotalPoints = Math.max(totalAttributePoints, reservedPoints + 10);
      remainingPoints = adjustedTotalPoints - reservedPoints;
    }

    // Distribute remaining points using randomized percentages
    const basePercentages = this.generateRandomBasePercentages();
    this.applyBaseDistribution(attributes, remainingPoints, basePercentages);

    // Enhance with remaining points
    this.enhanceAttributes(attributes, totalAttributePoints);

    return attributes;
  }

  private generateRandomBasePercentages(): number[] {
    const basePercentages: number[] = [];
    let totalPercentage = 0;

    for (let i = 0; i < this.attributeTypes.length; i++) {
      const range = this.attributeRanges[i];
      let percentage: number;

      if (i === this.attributeTypes.length - 1) {
        // Last attribute: use remaining percentage
        percentage = Math.max(range.min, Math.min(range.max, 1.0 - totalPercentage));
      } else {
        // Random percentage within range
        percentage = range.min + Math.random() * (range.max - range.min);
        totalPercentage += percentage;
      }

      basePercentages.push(percentage);
    }

    // Normalize to ensure sum equals 1.0
    return this.normalizePercentages(basePercentages);
  }

  private normalizePercentages(percentages: number[]): number[] {
    const sum = percentages.reduce((acc, val) => acc + val, 0);
    return percentages.map(p => p / sum);
  }

  private applyBaseDistribution(
    attributes: Record<string, number>,
    remainingPoints: number,
    basePercentages: number[]
  ): void {
    this.attributeTypes.forEach((type, index) => {
      const baseAmount = Math.floor(remainingPoints * basePercentages[index]);
      attributes[type] += baseAmount;
    });
  }

  private enhanceAttributes(
    attributes: Record<string, number>,
    totalAttributePoints: number
  ): void {
    const maxPerAttribute = Math.floor(totalAttributePoints * 0.5);
    const minPerAttribute = Math.floor(totalAttributePoints * 0.08);

    // Calculate remaining points after base distribution
    const usedPoints = Object.values(attributes).reduce((sum, val) => sum + val, 0);
    let remainingPoints = totalAttributePoints - usedPoints;

    while (remainingPoints > 0) {
      const availableAttributes = this.attributeTypes.filter(
        type => attributes[type] < maxPerAttribute && remainingPoints > 0
      );

      if (availableAttributes.length === 0) break;

      const randomAttribute = this.selectAttributeForEnhancement(
        availableAttributes,
        attributes,
        minPerAttribute
      );
      const pointsToAdd = this.calculateEnhancementPoints(
        attributes,
        randomAttribute,
        maxPerAttribute,
        remainingPoints
      );

      attributes[randomAttribute] += pointsToAdd;
      remainingPoints -= pointsToAdd;
    }
  }

  private selectAttributeForEnhancement(
    availableAttributes: string[],
    attributes: Record<string, number>,
    minPerAttribute: number
  ): string {
    const belowMinAttributes = availableAttributes.filter(
      type => attributes[type] < minPerAttribute
    );

    const targetAttributes =
      belowMinAttributes.length > 0 ? belowMinAttributes : availableAttributes;
    return getRandomArrayItem(targetAttributes);
  }

  private calculateEnhancementPoints(
    attributes: Record<string, number>,
    attributeType: string,
    maxPerAttribute: number,
    remainingPoints: number
  ): number {
    const maxPointsForThisAttribute = Math.min(
      maxPerAttribute - attributes[attributeType],
      remainingPoints,
      Math.floor(remainingPoints * 0.5)
    );

    return getRandomInRange(1, Math.max(1, Math.floor(maxPointsForThisAttribute * 0.9)));
  }

  private calculateHealth(totalAttributePoints: number): number {
    const minHealthPoints = 5;
    const healthPoints = Math.max(Math.floor(totalAttributePoints * 0.3), minHealthPoints);
    return healthPoints * 10;
  }

  private calculateRewards(level: number, rankMultiplier: number) {
    const baseExperience = 50 + level * 25;
    const baseGold = 20 + level * 15;

    return {
      experience_reward: Math.floor(baseExperience * rankMultiplier),
      gold_reward: Math.floor(baseGold * rankMultiplier),
    };
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
