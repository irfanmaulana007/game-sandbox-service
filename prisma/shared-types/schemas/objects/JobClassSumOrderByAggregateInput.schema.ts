import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const JobClassSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobClassSumOrderByAggregateInput, Prisma.JobClassSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional()
}).strict();
export const JobClassSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional()
}).strict();
