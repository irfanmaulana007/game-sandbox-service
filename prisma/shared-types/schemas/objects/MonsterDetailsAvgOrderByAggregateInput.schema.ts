import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterDetailsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsAvgOrderByAggregateInput, Prisma.MonsterDetailsAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional()
}).strict();
export const MonsterDetailsAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional()
}).strict();
