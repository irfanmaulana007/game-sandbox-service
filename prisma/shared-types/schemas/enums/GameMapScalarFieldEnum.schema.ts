import { z } from 'zod';

export const GameMapScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'minLevel', 'maxLevel', 'difficulty', 'backgroundImage', 'createdAt'])