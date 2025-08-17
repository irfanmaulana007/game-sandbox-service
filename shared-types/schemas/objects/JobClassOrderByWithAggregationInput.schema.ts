import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { JobClassCountOrderByAggregateInputObjectSchema } from './JobClassCountOrderByAggregateInput.schema';
import { JobClassAvgOrderByAggregateInputObjectSchema } from './JobClassAvgOrderByAggregateInput.schema';
import { JobClassMaxOrderByAggregateInputObjectSchema } from './JobClassMaxOrderByAggregateInput.schema';
import { JobClassMinOrderByAggregateInputObjectSchema } from './JobClassMinOrderByAggregateInput.schema';
import { JobClassSumOrderByAggregateInputObjectSchema } from './JobClassSumOrderByAggregateInput.schema'

export const JobClassOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.JobClassOrderByWithAggregationInput, Prisma.JobClassOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional(),
  _count: z.lazy(() => JobClassCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => JobClassAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => JobClassMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => JobClassMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => JobClassSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const JobClassOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional(),
  _count: z.lazy(() => JobClassCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => JobClassAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => JobClassMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => JobClassMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => JobClassSumOrderByAggregateInputObjectSchema).optional()
}).strict();
