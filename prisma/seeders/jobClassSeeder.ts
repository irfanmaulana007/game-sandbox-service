import { prisma } from '../../src/database/prisma';

export class JobClassSeeder {
  async seed(): Promise<void> {
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
