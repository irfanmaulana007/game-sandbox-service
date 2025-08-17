import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterDetailsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsMaxOrderByAggregateInput, Prisma.MonsterDetailsMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MonsterDetailsMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
