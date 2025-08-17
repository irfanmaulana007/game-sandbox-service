import { getPool } from './connection';
import dotenv from 'dotenv';

dotenv.config();

const pool = getPool();

async function runMigrations(): Promise<void> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    console.log('🚀 Starting database migrations...');

    // 1. Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Users table created');

    // 2. Create job_classes table
    await client.query(`
      CREATE TABLE IF NOT EXISTS job_classes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        base_health INTEGER NOT NULL,
        base_attack INTEGER NOT NULL,
        base_defense INTEGER NOT NULL,
        base_speed INTEGER NOT NULL,
        base_critical INTEGER NOT NULL,
        health_per_level INTEGER NOT NULL DEFAULT 10,
        attack_per_level INTEGER NOT NULL DEFAULT 1,
        defense_per_level INTEGER NOT NULL DEFAULT 1,
        speed_per_level INTEGER NOT NULL DEFAULT 1,
        critical_per_level INTEGER NOT NULL DEFAULT 1
      );
    `);
    console.log('✅ Job classes table created');

    // 3. Create characters table
    await client.query(`
      CREATE TABLE IF NOT EXISTS characters (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        job_id INTEGER NOT NULL REFERENCES job_classes(id),
        level INTEGER NOT NULL DEFAULT 1,
        experience INTEGER NOT NULL DEFAULT 0,
        health INTEGER NOT NULL,
        max_health INTEGER NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        speed INTEGER NOT NULL,
        critical INTEGER NOT NULL,
        status_points INTEGER NOT NULL DEFAULT 0,
        gold INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Characters table created');

    // 4. Create character_status table
    await client.query(`
      CREATE TABLE IF NOT EXISTS character_status (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
        health INTEGER NOT NULL,
        max_health INTEGER NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        speed INTEGER NOT NULL,
        critical INTEGER NOT NULL,
        status_points INTEGER NOT NULL DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Character status table created');

    // 5. Create equipment table
    await client.query(`
      CREATE TABLE IF NOT EXISTS equipment (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(20) NOT NULL CHECK (type IN ('weapon', 'armor', 'accessory')),
        rarity VARCHAR(20) NOT NULL CHECK (rarity IN ('common', 'uncommon', 'rare', 'epic', 'legendary')),
        min_level INTEGER NOT NULL DEFAULT 1,
        health_bonus INTEGER NOT NULL DEFAULT 0,
        attack_bonus INTEGER NOT NULL DEFAULT 0,
        defense_bonus INTEGER NOT NULL DEFAULT 0,
        speed_bonus INTEGER NOT NULL DEFAULT 0,
        critical_bonus INTEGER NOT NULL DEFAULT 0,
        description TEXT,
        drop_rate DECIMAL(5,4) NOT NULL DEFAULT 0.0100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Equipment table created');

    // 6. Create character_equipment table
    await client.query(`
      CREATE TABLE IF NOT EXISTS character_equipment (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
        equipment_id INTEGER NOT NULL REFERENCES equipment(id),
        slot VARCHAR(20) NOT NULL CHECK (slot IN ('weapon', 'armor', 'accessory1', 'accessory2')),
        equipped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Character equipment table created');

    // 7. Create items table
    await client.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(50) NOT NULL,
        description TEXT,
        effect_value INTEGER,
        rarity VARCHAR(20) NOT NULL CHECK (rarity IN ('common', 'uncommon', 'rare', 'epic', 'legendary')),
        drop_rate DECIMAL(5,4) NOT NULL DEFAULT 0.0100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Items table created');

    // 8. Create character_inventory table
    await client.query(`
      CREATE TABLE IF NOT EXISTS character_inventory (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
        item_id INTEGER NOT NULL REFERENCES items(id),
        quantity INTEGER NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Character inventory table created');

    // 9. Create maps table
    await client.query(`
      CREATE TABLE IF NOT EXISTS maps (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        min_level INTEGER NOT NULL DEFAULT 1,
        max_level INTEGER NOT NULL DEFAULT 99,
        difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('easy', 'normal', 'hard', 'extreme')),
        background_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Maps table created');

    // 10. Create monsters table
    await client.query(`
      CREATE TABLE IF NOT EXISTS monsters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        level INTEGER NOT NULL DEFAULT 1,
        health INTEGER NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        speed INTEGER NOT NULL,
        critical INTEGER NOT NULL,
        experience_reward INTEGER NOT NULL DEFAULT 0,
        gold_reward INTEGER NOT NULL DEFAULT 0,
        map_id INTEGER REFERENCES maps(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Monsters table created');

    // 11. Create monster_details table
    await client.query(`
      CREATE TABLE IF NOT EXISTS monster_details (
        id SERIAL PRIMARY KEY,
        monster_id INTEGER NOT NULL REFERENCES monsters(id) ON DELETE CASCADE,
        rank VARCHAR(20) NOT NULL CHECK (rank IN ('normal', 'elite', 'boss', 'legendary')),
        description TEXT,
        image_url VARCHAR(255),
        drop_table JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Monster details table created');

    // 12. Create battle_logs table
    await client.query(`
      CREATE TABLE IF NOT EXISTS battle_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
        monster_id INTEGER NOT NULL REFERENCES monsters(id),
        battle_result VARCHAR(10) NOT NULL CHECK (battle_result IN ('victory', 'defeat')),
        character_health_remaining INTEGER NOT NULL,
        monster_health_remaining INTEGER NOT NULL,
        turns_taken INTEGER NOT NULL,
        experience_gained INTEGER NOT NULL,
        gold_gained INTEGER NOT NULL,
        battle_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Battle logs table created');

    // Create indexes for better performance
    console.log('🔍 Creating database indexes...');

    await client.query('CREATE INDEX IF NOT EXISTS idx_characters_user_id ON characters(user_id);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_characters_job_id ON characters(job_id);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_characters_level ON characters(level);');
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_battle_logs_character_id ON battle_logs(character_id);'
    );
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_battle_logs_battle_date ON battle_logs(battle_date);'
    );
    await client.query('CREATE INDEX IF NOT EXISTS idx_equipment_type ON equipment(type);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_equipment_rarity ON equipment(rarity);');
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_equipment_min_level ON equipment(min_level);'
    );
    await client.query('CREATE INDEX IF NOT EXISTS idx_monsters_map_id ON monsters(map_id);');
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_monster_details_rank ON monster_details(rank);'
    );
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_character_equipment_character_id ON character_equipment(character_id);'
    );
    await client.query(
      'CREATE INDEX IF NOT EXISTS idx_character_inventory_character_id ON character_inventory(character_id);'
    );

    await client.query('COMMIT');
    console.log('🎉 All migrations completed successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations()
    .then(() => {
      console.log('✅ Database setup complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Database setup failed:', error);
      process.exit(1);
    });
}

export { runMigrations };
