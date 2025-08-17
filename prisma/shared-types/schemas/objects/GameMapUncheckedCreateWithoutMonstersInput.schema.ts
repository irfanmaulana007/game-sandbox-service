import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema'

export const GameMapUncheckedCreateWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapUncheckedCreateWithoutMonstersInput, Prisma.GameMapUncheckedCreateWithoutMonstersInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional()
}).strict();
export const GameMapUncheckedCreateWithoutMonstersInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional()
}).strict();
