import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const JobClassAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobClassAvgOrderByAggregateInput, Prisma.JobClassAvgOrderByAggregateInput> = z.object({
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
export const JobClassAvgOrderByAggregateInputObjectZodSchema = z.object({
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
