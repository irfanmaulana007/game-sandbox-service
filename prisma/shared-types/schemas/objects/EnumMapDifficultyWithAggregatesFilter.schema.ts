import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { NestedEnumMapDifficultyWithAggregatesFilterObjectSchema } from './NestedEnumMapDifficultyWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMapDifficultyFilterObjectSchema } from './NestedEnumMapDifficultyFilter.schema'

export const EnumMapDifficultyWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMapDifficultyWithAggregatesFilter, Prisma.EnumMapDifficultyWithAggregatesFilter> = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional()
}).strict();
export const EnumMapDifficultyWithAggregatesFilterObjectZodSchema = z.object({
  equals: MapDifficultySchema.optional(),
  in: MapDifficultySchema.array().optional(),
  notIn: MapDifficultySchema.array().optional(),
  not: z.union([MapDifficultySchema, z.lazy(() => NestedEnumMapDifficultyWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMapDifficultyFilterObjectSchema).optional()
}).strict();
