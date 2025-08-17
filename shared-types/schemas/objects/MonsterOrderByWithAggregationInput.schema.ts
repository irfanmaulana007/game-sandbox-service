import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MonsterCountOrderByAggregateInputObjectSchema } from './MonsterCountOrderByAggregateInput.schema';
import { MonsterAvgOrderByAggregateInputObjectSchema } from './MonsterAvgOrderByAggregateInput.schema';
import { MonsterMaxOrderByAggregateInputObjectSchema } from './MonsterMaxOrderByAggregateInput.schema';
import { MonsterMinOrderByAggregateInputObjectSchema } from './MonsterMinOrderByAggregateInput.schema';
import { MonsterSumOrderByAggregateInputObjectSchema } from './MonsterSumOrderByAggregateInput.schema'

export const MonsterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MonsterOrderByWithAggregationInput, Prisma.MonsterOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MonsterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MonsterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MonsterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MonsterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MonsterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MonsterOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MonsterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MonsterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MonsterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MonsterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MonsterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
