import { prisma } from './prisma';

async function seedBasicData() {
  console.log('🚀 Starting basic database seeding...');

  try {
    // Create a test user
    const user = await prisma.user.upsert({
      where: { username: 'testuser' },
      update: {},
      create: {
        username: 'testuser',
        email: 'test@example.com',
        passwordHash: 'hashedpassword123', // In real app, use bcrypt
      },
    });

    console.log('✅ User created:', user.username);

    // Create job classes
    const barbarian = await prisma.jobClass.upsert({
      where: { name: 'Barbarian' },
      update: {},
      create: {
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
    });

    console.log('✅ Job class created:', barbarian.name);

    // Create a test character
    const character = await prisma.character.create({
      data: {
        userId: user.id,
        name: 'TestHero',
        jobId: barbarian.id,
        level: 1,
        experience: 0,
        health: barbarian.baseHealth,
        maxHealth: barbarian.baseHealth,
        attack: barbarian.baseAttack,
        defense: barbarian.baseDefense,
        speed: barbarian.baseSpeed,
        critical: barbarian.baseCritical,
        statusPoints: 0,
        gold: 0,
      },
    });

    console.log('✅ Character created:', character.name);

    // Create a test map
    const map = await prisma.gameMap.create({
      data: {
        name: 'Test Forest',
        difficulty: 'easy',
        minLevel: 1,
        maxLevel: 10,
        description: 'A peaceful forest for beginners',
        backgroundImage: 'forest_bg.jpg',
      },
    });

    console.log('✅ Map created:', map.name);

    // Create a test monster
    const monster = await prisma.monster.create({
      data: {
        name: 'Test Goblin',
        level: 1,
        health: 50,
        attack: 8,
        defense: 5,
        speed: 6,
        critical: 3,
        experienceReward: 25,
        goldReward: 10,
        mapId: map.id,
      },
    });

    console.log('✅ Monster created:', monster.name);

    // Create monster details
    await prisma.monsterDetails.create({
      data: {
        monsterId: monster.id,
        rank: 'normal',
        description: 'A weak goblin for testing',
        imageUrl: 'goblin.jpg',
        dropTable: { equipment: 0.1, items: 0.15, gold_multiplier: 1 },
      },
    });

    console.log('✅ Monster details created');

    // Create some basic equipment
    const sword = await prisma.equipment.create({
      data: {
        name: 'Iron Sword',
        type: 'weapon',
        rarity: 'common',
        minLevel: 1,
        healthBonus: 0,
        attackBonus: 5,
        defenseBonus: 0,
        speedBonus: 0,
        criticalBonus: 0,
        description: 'A basic iron sword',
        dropRate: 0.15,
      },
    });

    console.log('✅ Equipment created:', sword.name);

    console.log('🎉 Basic seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run seeder if this file is executed directly
if (require.main === module) {
  seedBasicData()
    .then(() => {
      console.log('✅ Basic seeding complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Basic seeding failed:', error);
      process.exit(1);
    });
}

export { seedBasicData };
