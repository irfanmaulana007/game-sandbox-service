import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MonsterOrderByRelationAggregateInput, Prisma.MonsterOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MonsterOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
