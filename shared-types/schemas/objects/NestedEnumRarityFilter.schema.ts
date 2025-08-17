import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema'

export const NestedEnumRarityFilterObjectSchema: z.ZodType<Prisma.NestedEnumRarityFilter, Prisma.NestedEnumRarityFilter> = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRarityFilterObjectZodSchema = z.object({
  equals: RaritySchema.optional(),
  in: RaritySchema.array().optional(),
  notIn: RaritySchema.array().optional(),
  not: z.union([RaritySchema, z.lazy(() => NestedEnumRarityFilterObjectSchema)]).optional()
}).strict();
