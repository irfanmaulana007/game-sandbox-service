import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRarityFilterObjectSchema } from './NestedEnumRarityFilter.schema'

export const NestedEnumRarityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRarityWithAggregatesFilter, Prisma.NestedEnumRarityWithAggregatesFilter> = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional()
}).strict();
export const NestedEnumRarityWithAggregatesFilterObjectZodSchema = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional()
}).strict();
