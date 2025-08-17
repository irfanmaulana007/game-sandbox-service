import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemSumOrderByAggregateInput, Prisma.ItemSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
export const ItemSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
