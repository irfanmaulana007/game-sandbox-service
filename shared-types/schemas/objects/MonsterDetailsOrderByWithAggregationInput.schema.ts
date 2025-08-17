import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MonsterDetailsCountOrderByAggregateInputObjectSchema } from './MonsterDetailsCountOrderByAggregateInput.schema';
import { MonsterDetailsAvgOrderByAggregateInputObjectSchema } from './MonsterDetailsAvgOrderByAggregateInput.schema';
import { MonsterDetailsMaxOrderByAggregateInputObjectSchema } from './MonsterDetailsMaxOrderByAggregateInput.schema';
import { MonsterDetailsMinOrderByAggregateInputObjectSchema } from './MonsterDetailsMinOrderByAggregateInput.schema';
import { MonsterDetailsSumOrderByAggregateInputObjectSchema } from './MonsterDetailsSumOrderByAggregateInput.schema'

export const MonsterDetailsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MonsterDetailsOrderByWithAggregationInput, Prisma.MonsterDetailsOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropTable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MonsterDetailsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MonsterDetailsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MonsterDetailsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MonsterDetailsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MonsterDetailsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MonsterDetailsOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropTable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MonsterDetailsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MonsterDetailsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MonsterDetailsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MonsterDetailsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MonsterDetailsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
