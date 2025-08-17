import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterDetailsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsCountOrderByAggregateInput, Prisma.MonsterDetailsCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  dropTable: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MonsterDetailsCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  dropTable: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
