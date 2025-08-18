import { prisma } from '../../src/database/prisma';

export class JobClassSeeder {
  async seed(): Promise<void> {
    console.log('📚 Seeding job classes...');

    const jobClasses = [
      {
        name: 'Barbarian',
        description: 'High defense warrior with balanced stats',
        // Base stats: 60 points total
        // Barbarian: High defense, balanced attack, moderate health, low speed/critical
        baseHealth: 12 * 10, // 120 HP (12 points * 10)
        baseAttack: 12,
        baseDefense: 17,
        baseSpeed: 8,
        baseCritical: 9,
        // Status per level: 5 points total (from 7 status points per level)
        // Barbarian: Focus on defense and health
        healthPerLevel: 2 * 10, // 10 HP (1 point * 10)
        attackPerLevel: 1,
        defensePerLevel: 2,
        speedPerLevel: 1,
        criticalPerLevel: 1,
      },
      {
        name: 'Swordsman',
        description: 'Balanced fighter with good attack and defense',
        // Base stats: 60 points total
        // Swordsman: Balanced attack/defense, moderate health, moderate speed/critical
        baseHealth: 10 * 10, // 100 HP (10 points * 10)
        baseAttack: 15,
        baseDefense: 15,
        baseSpeed: 10,
        baseCritical: 10,
        // Status per level: 5 points total
        // Swordsman: Balanced growth
        healthPerLevel: 1 * 10, // 10 HP (1 point * 10)
        attackPerLevel: 2,
        defensePerLevel: 2,
        speedPerLevel: 1,
        criticalPerLevel: 1,
      },
      {
        name: 'Archer',
        description: 'Ranged fighter with high speed and critical',
        // Base stats: 60 points total
        // Archer: High attack, moderate defense, high speed/critical, low health
        baseHealth: 8 * 10, // 80 HP (8 points * 10)
        baseAttack: 15,
        baseDefense: 10,
        baseSpeed: 15,
        baseCritical: 12,
        // Status per level: 5 points total
        // Archer: Focus on attack, speed, and critical
        healthPerLevel: 1 * 10, // 0 HP (0 points * 10)
        attackPerLevel: 2,
        defensePerLevel: 1,
        speedPerLevel: 2,
        criticalPerLevel: 1,
      },
      {
        name: 'Ninja',
        description: 'Stealth fighter with highest speed and critical',
        // Base stats: 60 points total
        // Ninja: High attack, low defense, highest speed/critical, lowest health
        baseHealth: 8 * 10, // 80 HP (8 points * 10)
        baseAttack: 12,
        baseDefense: 8,
        baseSpeed: 18,
        baseCritical: 14,
        // Status per level: 5 points total
        // Ninja: Focus on attack, speed, and critical
        healthPerLevel: 1 * 10, // 0 HP (0 points * 10)
        attackPerLevel: 1,
        defensePerLevel: 1,
        speedPerLevel: 2,
        criticalPerLevel: 2,
      },
    ];

    for (const jobClass of jobClasses) {
      await prisma.jobClass.upsert({
        where: { name: jobClass.name },
        update: {},
        create: {
          name: jobClass.name,
          description: jobClass.description,
          base_health: jobClass.baseHealth,
          base_attack: jobClass.baseAttack,
          base_defense: jobClass.baseDefense,
          base_speed: jobClass.baseSpeed,
          base_critical: jobClass.baseCritical,
          health_per_level: jobClass.healthPerLevel,
          attack_per_level: jobClass.attackPerLevel,
          defense_per_level: jobClass.defensePerLevel,
          speed_per_level: jobClass.speedPerLevel,
          critical_per_level: jobClass.criticalPerLevel,
        },
      });
    }

    console.log('✅ Successfully seeded job classes');
  }
}
