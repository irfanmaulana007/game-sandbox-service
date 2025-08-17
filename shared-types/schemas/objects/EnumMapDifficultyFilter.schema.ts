import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { NestedEnumMapDifficultyFilterObjectSchema } from './NestedEnumMapDifficultyFilter.schema'

export const EnumMapDifficultyFilterObjectSchema: z.ZodType<Prisma.EnumMapDifficultyFilter, Prisma.EnumMapDifficultyFilter> = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema)]).optional()
}).strict();
export const EnumMapDifficultyFilterObjectZodSchema = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema)]).optional()
}).strict();
