import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMapDifficultyFilterObjectSchema } from './NestedEnumMapDifficultyFilter.schema'

export const NestedEnumMapDifficultyWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumMapDifficultyWithAggregatesFilter, Prisma.NestedEnumMapDifficultyWithAggregatesFilter> = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional()
}).strict();
export const NestedEnumMapDifficultyWithAggregatesFilterObjectZodSchema = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional()
}).strict();
