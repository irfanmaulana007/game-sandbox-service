import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ItemCountOrderByAggregateInputObjectSchema } from './ItemCountOrderByAggregateInput.schema';
import { ItemAvgOrderByAggregateInputObjectSchema } from './ItemAvgOrderByAggregateInput.schema';
import { ItemMaxOrderByAggregateInputObjectSchema } from './ItemMaxOrderByAggregateInput.schema';
import { ItemMinOrderByAggregateInputObjectSchema } from './ItemMinOrderByAggregateInput.schema';
import { ItemSumOrderByAggregateInputObjectSchema } from './ItemSumOrderByAggregateInput.schema'

export const ItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ItemOrderByWithAggregationInput, Prisma.ItemOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effectValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ItemOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effectValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
