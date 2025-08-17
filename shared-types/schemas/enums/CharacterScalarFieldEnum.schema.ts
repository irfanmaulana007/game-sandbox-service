import { z } from 'zod';

export const CharacterScalarFieldEnumSchema = z.enum(['id', 'userId', 'name', 'jobId', 'level', 'experience', 'health', 'maxHealth', 'attack', 'defense', 'speed', 'critical', 'statusPoints', 'gold', 'createdAt', 'updatedAt'])