import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const GameMapSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameMapSumOrderByAggregateInput, Prisma.GameMapSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional()
}).strict();
export const GameMapSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional()
}).strict();
