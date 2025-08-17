import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ItemMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemMaxOrderByAggregateInput, Prisma.ItemMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ItemMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
