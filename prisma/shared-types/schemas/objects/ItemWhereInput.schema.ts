import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumRarityFilterObjectSchema } from './EnumRarityFilter.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { CharacterInventoryListRelationFilterObjectSchema } from './CharacterInventoryListRelationFilter.schema'

export const ItemWhereInputObjectSchema: z.ZodType<Prisma.ItemWhereInput, Prisma.ItemWhereInput> = z.object({
  AND: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  effectValue: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  rarity: z.union([z.lazy(() => EnumRarityFilterObjectSchema), RaritySchema]).optional(),
  dropRate: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  characterInventory: z.lazy(() => CharacterInventoryListRelationFilterObjectSchema).optional()
}).strict();
export const ItemWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ItemWhereInputObjectSchema), z.lazy(() => ItemWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  effectValue: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  rarity: z.union([z.lazy(() => EnumRarityFilterObjectSchema), RaritySchema]).optional(),
  dropRate: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  characterInventory: z.lazy(() => CharacterInventoryListRelationFilterObjectSchema).optional()
}).strict();
