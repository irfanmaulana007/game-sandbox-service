import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema'

export const NestedEnumMapDifficultyFilterObjectSchema: z.ZodType<Prisma.NestedEnumMapDifficultyFilter, Prisma.NestedEnumMapDifficultyFilter> = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMapDifficultyFilterObjectZodSchema = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema)]).optional()
}).strict();
