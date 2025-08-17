import { z } from 'zod';

export const MonsterScalarFieldEnumSchema = z.enum(['id', 'name', 'level', 'health', 'attack', 'defense', 'speed', 'critical', 'experienceReward', 'goldReward', 'mapId', 'createdAt'])