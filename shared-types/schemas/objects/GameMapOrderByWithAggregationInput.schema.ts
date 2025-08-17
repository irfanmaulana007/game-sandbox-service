import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameMapCountOrderByAggregateInputObjectSchema } from './GameMapCountOrderByAggregateInput.schema';
import { GameMapAvgOrderByAggregateInputObjectSchema } from './GameMapAvgOrderByAggregateInput.schema';
import { GameMapMaxOrderByAggregateInputObjectSchema } from './GameMapMaxOrderByAggregateInput.schema';
import { GameMapMinOrderByAggregateInputObjectSchema } from './GameMapMinOrderByAggregateInput.schema';
import { GameMapSumOrderByAggregateInputObjectSchema } from './GameMapSumOrderByAggregateInput.schema'

export const GameMapOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GameMapOrderByWithAggregationInput, Prisma.GameMapOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GameMapCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GameMapAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GameMapMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GameMapMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GameMapSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GameMapOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GameMapCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GameMapAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GameMapMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GameMapMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GameMapSumOrderByAggregateInputObjectSchema).optional()
}).strict();
