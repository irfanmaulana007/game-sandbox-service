import { Pool } from 'pg';
import Redis from 'redis';

// PostgreSQL connection pool
let pool: Pool;
let redisClient: Redis.RedisClientType;

export async function initializeDatabase(): Promise<void> {
  try {
    // Initialize PostgreSQL pool
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      database: process.env.DATABASE_NAME || 'game_db',
      user: process.env.DATABASE_USER || 'username',
      password: process.env.DATABASE_PASSWORD || 'password',
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });

    // Test the connection
    const client = await pool.connect();

    console.log('✅ PostgreSQL connected successfully');
    client.release();

    // Initialize Redis client
    redisClient = Redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

    redisClient.on('error', err => {
      console.error('Redis Client Error:', err);
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    await redisClient.connect();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

export function getPool(): Pool {
  if (!pool) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }

  return pool;
}

export function getRedisClient(): Redis.RedisClientType {
  if (!redisClient) {
    throw new Error('Redis not initialized. Call initializeDatabase() first.');
  }

  return redisClient;
}

export async function closeDatabase(): Promise<void> {
  try {
    if (pool) {
      await pool.end();
      console.log('✅ PostgreSQL pool closed');
    }

    if (redisClient) {
      await redisClient.quit();
      console.log('✅ Redis connection closed');
    }
  } catch (error) {
    console.error('❌ Error closing database connections:', error);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  await closeDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  await closeDatabase();
  process.exit(0);
});
