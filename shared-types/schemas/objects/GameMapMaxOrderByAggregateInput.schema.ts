import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const GameMapMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameMapMaxOrderByAggregateInput, Prisma.GameMapMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const GameMapMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
