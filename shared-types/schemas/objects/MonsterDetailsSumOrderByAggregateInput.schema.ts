import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterDetailsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsSumOrderByAggregateInput, Prisma.MonsterDetailsSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional()
}).strict();
export const MonsterDetailsSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional()
}).strict();
