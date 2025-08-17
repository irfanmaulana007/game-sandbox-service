import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const GameMapAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameMapAvgOrderByAggregateInput, Prisma.GameMapAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional()
}).strict();
export const GameMapAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional()
}).strict();
