import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterDetailsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsMinOrderByAggregateInput, Prisma.MonsterDetailsMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MonsterDetailsMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
