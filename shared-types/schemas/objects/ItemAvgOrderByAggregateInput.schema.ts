import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ItemAvgOrderByAggregateInput, Prisma.ItemAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
export const ItemAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  effectValue: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
