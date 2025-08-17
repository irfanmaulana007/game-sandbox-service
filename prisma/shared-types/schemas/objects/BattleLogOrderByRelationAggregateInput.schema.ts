import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BattleLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogOrderByRelationAggregateInput, Prisma.BattleLogOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BattleLogOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
