// User types
export interface User {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

// Job class types
export interface JobClass {
  id: number;
  name: string;
  description: string;
  base_health: number;
  base_attack: number;
  base_defense: number;
  base_speed: number;
  base_critical: number;
  health_per_level: number;
  attack_per_level: number;
  defense_per_level: number;
  speed_per_level: number;
  critical_per_level: number;
}

// Character types
export interface Character {
  id: string;
  user_id: string;
  name: string;
  job_id: number;
  level: number;
  experience: number;
  health: number;
  max_health: number;
  attack: number;
  defense: number;
  speed: number;
  critical: number;
  status_points: number;
  gold: number;
  created_at: Date;
  updated_at: Date;
}

export interface CharacterWithJob extends Character {
  job: JobClass;
}

export interface CreateCharacterRequest {
  name: string;
  job_id: number;
}

export interface AllocateStatsRequest {
  health_points: number;
  attack_points: number;
  defense_points: number;
  speed_points: number;
  critical_points: number;
}

// Equipment types
export interface Equipment {
  id: number;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  min_level: number;
  health_bonus: number;
  attack_bonus: number;
  defense_bonus: number;
  speed_bonus: number;
  critical_bonus: number;
  description: string;
  drop_rate: number;
  created_at: Date;
}

export interface CharacterEquipment {
  id: string;
  character_id: string;
  equipment_id: number;
  slot: 'weapon' | 'armor' | 'accessory1' | 'accessory2';
  equipped_at: Date;
  equipment?: Equipment;
}

// Item types
export interface Item {
  id: number;
  name: string;
  type: string;
  description: string;
  effect_value: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  drop_rate: number;
  created_at: Date;
}

export interface CharacterInventory {
  id: string;
  character_id: string;
  item_id: number;
  quantity: number;
  created_at: Date;
  item?: Item;
}

// Map types
export interface GameMap {
  id: number;
  name: string;
  description: string;
  min_level: number;
  max_level: number;
  difficulty: 'easy' | 'normal' | 'hard' | 'extreme';
  background_image: string;
  created_at: Date;
}

// Monster types
export interface Monster {
  id: number;
  name: string;
  level: number;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  critical: number;
  experience_reward: number;
  gold_reward: number;
  map_id: number;
  created_at: Date;
}

export interface MonsterDetails {
  id: number;
  monster_id: number;
  rank: 'normal' | 'elite' | 'boss' | 'legendary';
  description: string;
  image_url: string;
  drop_table: unknown;
  created_at: Date;
}

export interface MonsterWithDetails extends Monster {
  details: MonsterDetails;
}

// Battle types
export interface BattleEntity {
  id: string | number;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  critical: number;
}

export interface BattleResult {
  damage: number;
  isCritical: boolean;
}

export interface BattleLog {
  id: string;
  character_id: string;
  monster_id: number;
  battle_result: 'victory' | 'defeat';
  character_health_remaining: number;
  monster_health_remaining: number;
  turns_taken: number;
  experience_gained: number;
  gold_gained: number;
  battle_date: Date;
}

export interface BattleRequest {
  character_id: string;
  monster_id: number;
}

// Experience and leveling
export interface ExperienceLevel {
  level: number;
  experience: number;
}

export interface CreateExperienceLevelRequest {
  level: number;
  experience: number;
}

export interface UpdateExperienceLevelRequest {
  experience: number;
}

// API Response types - Legacy (deprecated, use response utility instead)
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// New standardized response types
export interface StandardSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface StandardErrorResponse {
  success: false;
  message: string;
  errorStatus: number;
  data?: unknown;
}

export type StandardApiResponse<T = unknown> = StandardSuccessResponse<T> | StandardErrorResponse;

// Authentication types
export interface JwtPayload {
  userId: string;
  username: string;
  iat: number;
  exp?: number;
}

// export interface AuthenticatedRequest extends Request {
export interface AuthenticatedRequest {
  user?: JwtPayload;
}

// Database types
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  ssl?: boolean;
}

// Redis types
export interface RedisConfig {
  url: string;
  host: string;
  port: number;
}

// Server configuration
export interface ServerConfig {
  port: number;
  nodeEnv: string;
  corsOrigin: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  rateLimitWindowMs: number;
  rateLimitMaxRequests: number;
}
