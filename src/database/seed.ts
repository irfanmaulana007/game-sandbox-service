import { getPool } from './connection';
import dotenv from 'dotenv';

dotenv.config();

const pool = getPool();

async function seedDatabase(): Promise<void> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    console.log('🌱 Starting database seeding...');

    // 1. Seed job classes
    console.log('📚 Seeding job classes...');
    await client.query(`
      INSERT INTO job_classes (name, description, base_health, base_attack, base_defense, base_speed, base_critical, health_per_level, attack_per_level, defense_per_level, speed_per_level, critical_per_level) VALUES
      ('Barbarian', 'High defense warrior with balanced stats', 120, 15, 20, 10, 5, 12, 2, 3, 1, 1),
      ('Swordsman', 'Balanced fighter with good attack and defense', 100, 18, 18, 12, 8, 10, 2, 2, 1, 1),
      ('Archer', 'Ranged fighter with high speed and critical', 80, 20, 12, 18, 15, 8, 2, 1, 2, 2),
      ('Ninja', 'Stealth fighter with highest speed and critical', 70, 22, 10, 22, 20, 7, 2, 1, 3, 3)
      ON CONFLICT (name) DO NOTHING;
    `);

    // 2. Seed maps
    console.log('🗺️ Seeding maps...');
    await client.query(`
      INSERT INTO maps (name, description, min_level, max_level, difficulty, background_image) VALUES
      ('Forest of Beginnings', 'A peaceful forest perfect for new adventurers', 1, 10, 'easy', 'forest_bg.jpg'),
      ('Dark Cave', 'A mysterious cave with stronger monsters', 5, 20, 'normal', 'cave_bg.jpg'),
      ('Mountain Peak', 'A challenging mountain with elite monsters', 15, 35, 'hard', 'mountain_bg.jpg'),
      ('Abyss Depths', 'The most dangerous area with legendary creatures', 30, 99, 'extreme', 'abyss_bg.jpg')
      ON CONFLICT (id) DO NOTHING;
    `);

    // 3. Seed monsters
    console.log('👹 Seeding monsters...');
    await client.query(`
      INSERT INTO monsters (name, level, health, attack, defense, speed, critical, experience_reward, gold_reward, map_id) VALUES
      ('Goblin', 1, 50, 8, 5, 6, 3, 25, 10, 1),
      ('Wolf', 3, 80, 12, 8, 10, 5, 45, 18, 1),
      ('Bandit', 5, 120, 18, 12, 14, 8, 75, 30, 1),
      ('Orc', 8, 200, 25, 20, 12, 10, 120, 50, 2),
      ('Troll', 12, 350, 35, 30, 10, 12, 200, 80, 2),
      ('Dragon', 25, 800, 60, 50, 20, 25, 500, 200, 3),
      ('Demon Lord', 50, 2000, 120, 100, 30, 40, 1500, 600, 4)
      ON CONFLICT (id) DO NOTHING;
    `);

    // 4. Seed monster details
    console.log('🔍 Seeding monster details...');
    await client.query(`
      INSERT INTO monster_details (monster_id, rank, description, image_url, drop_table) VALUES
      (1, 'normal', 'A small green goblin with basic combat skills', 'goblin.jpg', '{"equipment": [1, 2], "items": [1, 2], "rates": [0.1, 0.05]}'),
      (2, 'normal', 'A wild wolf with sharp fangs', 'wolf.jpg', '{"equipment": [3], "items": [3], "rates": [0.08, 0.12]}'),
      (3, 'normal', 'A human bandit with basic weapons', 'bandit.jpg', '{"equipment": [4, 5], "items": [4], "rates": [0.15, 0.1]}'),
      (4, 'elite', 'A strong orc warrior', 'orc.jpg', '{"equipment": [6, 7], "items": [5, 6], "rates": [0.2, 0.15]}'),
      (5, 'elite', 'A massive troll with regenerative abilities', 'troll.jpg', '{"equipment": [8, 9], "items": [7, 8], "rates": [0.25, 0.2]}'),
      (6, 'boss', 'A fearsome dragon with fire breath', 'dragon.jpg', '{"equipment": [10, 11], "items": [9, 10], "rates": [0.4, 0.3]}'),
      (7, 'legendary', 'The ultimate evil, ruler of the abyss', 'demon_lord.jpg', '{"equipment": [12, 13], "items": [11, 12], "rates": [0.6, 0.5]}')
      ON CONFLICT (id) DO NOTHING;
    `);

    // 5. Seed equipment
    console.log('⚔️ Seeding equipment...');
    await client.query(`
      INSERT INTO equipment (name, type, rarity, min_level, health_bonus, attack_bonus, defense_bonus, speed_bonus, critical_bonus, description, drop_rate) VALUES
      ('Wooden Sword', 'weapon', 'common', 1, 0, 5, 0, 0, 0, 'A basic wooden training sword', 0.15),
      ('Leather Armor', 'armor', 'common', 1, 20, 0, 8, 0, 0, 'Basic leather protection', 0.12),
      ('Iron Sword', 'weapon', 'uncommon', 5, 0, 12, 0, 0, 2, 'A reliable iron sword', 0.08),
      ('Chain Mail', 'armor', 'uncommon', 5, 35, 0, 15, -2, 0, 'Heavy but protective chain armor', 0.06),
      ('Steel Sword', 'weapon', 'rare', 10, 0, 20, 0, 0, 5, 'A well-crafted steel weapon', 0.04),
      ('Plate Armor', 'armor', 'rare', 10, 60, 0, 25, -5, 0, 'Heavy plate armor for maximum protection', 0.03),
      ('Magic Bow', 'weapon', 'epic', 15, 0, 30, 0, 10, 15, 'A magical bow with enhanced accuracy', 0.02),
      ('Dragon Scale Armor', 'armor', 'epic', 20, 100, 0, 40, 5, 0, 'Armor crafted from dragon scales', 0.015),
      ('Legendary Blade', 'weapon', 'legendary', 30, 0, 50, 0, 15, 25, 'A legendary weapon of immense power', 0.005),
      ('Divine Armor', 'armor', 'legendary', 35, 150, 0, 60, 10, 0, 'Armor blessed by the gods', 0.003),
      ('Speed Ring', 'accessory', 'rare', 8, 0, 0, 0, 15, 5, 'A ring that enhances speed and critical', 0.025),
      ('Health Amulet', 'accessory', 'uncommon', 3, 50, 0, 0, 0, 0, 'An amulet that increases health', 0.08),
      ('Power Gauntlets', 'accessory', 'epic', 18, 0, 20, 10, 0, 10, 'Gauntlets that enhance combat abilities', 0.02)
      ON CONFLICT (id) DO NOTHING;
    `);

    // 6. Seed items
    console.log('📦 Seeding items...');
    await client.query(`
      INSERT INTO items (name, type, description, effect_value, rarity, drop_rate) VALUES
      ('Health Potion', 'consumable', 'Restores 50 health points', 50, 'common', 0.25),
      ('Mana Potion', 'consumable', 'Restores 30 mana points', 30, 'common', 0.20),
      ('Strength Elixir', 'buff', 'Increases attack by 10 for 5 minutes', 10, 'uncommon', 0.12),
      ('Defense Elixir', 'buff', 'Increases defense by 10 for 5 minutes', 10, 'uncommon', 0.12),
      ('Speed Elixir', 'buff', 'Increases speed by 10 for 5 minutes', 10, 'uncommon', 0.12),
      ('Critical Elixir', 'buff', 'Increases critical by 10 for 5 minutes', 10, 'uncommon', 0.12),
      ('Experience Scroll', 'special', 'Doubles experience gain for 1 hour', 2, 'rare', 0.05),
      ('Gold Doubler', 'special', 'Doubles gold gain for 1 hour', 2, 'rare', 0.05),
      ('Rare Drop Charm', 'special', 'Increases rare item drop rate by 50% for 30 minutes', 50, 'epic', 0.02),
      ('Legendary Charm', 'special', 'Increases legendary item drop rate by 100% for 15 minutes', 100, 'legendary', 0.01),
      ('Resurrection Stone', 'special', 'Revives character with full health when defeated', 1, 'legendary', 0.005),
      ('Skill Reset Scroll', 'special', 'Allows redistribution of all status points', 1, 'epic', 0.015)
      ON CONFLICT (id) DO NOTHING;
    `);

    await client.query('COMMIT');
    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Seeding failed:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ Database seeding complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Database seeding failed:', error);
      process.exit(1);
    });
}

export { seedDatabase };
