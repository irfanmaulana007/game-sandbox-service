import { z } from 'zod';

export const MonsterDetailsScalarFieldEnumSchema = z.enum(['id', 'monsterId', 'rank', 'description', 'imageUrl', 'dropTable', 'createdAt'])