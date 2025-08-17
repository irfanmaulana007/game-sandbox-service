import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema'

export const GameMapCreateWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapCreateWithoutMonstersInput, Prisma.GameMapCreateWithoutMonstersInput> = z.object({
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional()
}).strict();
export const GameMapCreateWithoutMonstersInputObjectZodSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  minLevel: z.number().int().optional(),
  maxLevel: z.number().int().optional(),
  difficulty: MapDifficultySchema,
  backgroundImage: z.string().nullish(),
  createdAt: z.date().optional()
}).strict();
