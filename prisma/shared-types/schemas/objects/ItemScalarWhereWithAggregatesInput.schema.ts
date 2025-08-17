import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumRarityWithAggregatesFilterObjectSchema } from './EnumRarityWithAggregatesFilter.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

export const ItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ItemScalarWhereWithAggregatesInput, Prisma.ItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  effectValue: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).nullish(),
  rarity: z.union([z.lazy(() => EnumRarityWithAggregatesFilterObjectSchema), RaritySchema]).optional(),
  dropRate: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const ItemScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  effectValue: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).nullish(),
  rarity: z.union([z.lazy(() => EnumRarityWithAggregatesFilterObjectSchema), RaritySchema]).optional(),
  dropRate: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
