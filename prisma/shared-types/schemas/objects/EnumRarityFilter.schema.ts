import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema';
import { NestedEnumRarityFilterObjectSchema } from './NestedEnumRarityFilter.schema'

export const EnumRarityFilterObjectSchema: z.ZodType<Prisma.EnumRarityFilter, Prisma.EnumRarityFilter> = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityFilterObjectSchema)]).optional()
}).strict();
export const EnumRarityFilterObjectZodSchema = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityFilterObjectSchema)]).optional()
}).strict();
