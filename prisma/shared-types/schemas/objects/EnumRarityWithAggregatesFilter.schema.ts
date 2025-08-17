import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema';
import { NestedEnumRarityWithAggregatesFilterObjectSchema } from './NestedEnumRarityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRarityFilterObjectSchema } from './NestedEnumRarityFilter.schema'

export const EnumRarityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRarityWithAggregatesFilter, Prisma.EnumRarityWithAggregatesFilter> = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional()
}).strict();
export const EnumRarityWithAggregatesFilterObjectZodSchema = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRarityFilterObjectSchema).optional()
}).strict();
