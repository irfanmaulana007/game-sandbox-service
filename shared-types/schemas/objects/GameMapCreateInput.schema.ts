import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { MonsterCreateNestedManyWithoutMapInputObjectSchema } from './MonsterCreateNestedManyWithoutMapInput.schema'

export const GameMapCreateInputObjectSchema: z.ZodType<Prisma.GameMapCreateInput, Prisma.GameMapCreateInput> = z.object({
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional(),
  monsters: z.lazy(() => MonsterCreateNestedManyWithoutMapInputObjectSchema).optional()
}).strict();
export const GameMapCreateInputObjectZodSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional(),
  monsters: z.lazy(() => MonsterCreateNestedManyWithoutMapInputObjectSchema).optional()
}).strict();
