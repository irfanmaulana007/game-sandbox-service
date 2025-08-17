import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { MonsterUncheckedCreateNestedManyWithoutMapInputObjectSchema } from './MonsterUncheckedCreateNestedManyWithoutMapInput.schema'

export const GameMapUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GameMapUncheckedCreateInput, Prisma.GameMapUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional(),
  monsters: z.lazy(() => MonsterUncheckedCreateNestedManyWithoutMapInputObjectSchema).optional()
}).strict();
export const GameMapUncheckedCreateInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional(),
  monsters: z.lazy(() => MonsterUncheckedCreateNestedManyWithoutMapInputObjectSchema).optional()
}).strict();
