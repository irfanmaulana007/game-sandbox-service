import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterInventoryCountOrderByAggregateInputObjectSchema } from './CharacterInventoryCountOrderByAggregateInput.schema';
import { CharacterInventoryAvgOrderByAggregateInputObjectSchema } from './CharacterInventoryAvgOrderByAggregateInput.schema';
import { CharacterInventoryMaxOrderByAggregateInputObjectSchema } from './CharacterInventoryMaxOrderByAggregateInput.schema';
import { CharacterInventoryMinOrderByAggregateInputObjectSchema } from './CharacterInventoryMinOrderByAggregateInput.schema';
import { CharacterInventorySumOrderByAggregateInputObjectSchema } from './CharacterInventorySumOrderByAggregateInput.schema'

export const CharacterInventoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CharacterInventoryOrderByWithAggregationInput, Prisma.CharacterInventoryOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterInventoryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterInventoryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterInventoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterInventoryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterInventorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CharacterInventoryOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterInventoryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterInventoryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterInventoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterInventoryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterInventorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
