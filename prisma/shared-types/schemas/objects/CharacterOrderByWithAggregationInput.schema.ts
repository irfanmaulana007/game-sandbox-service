import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterCountOrderByAggregateInputObjectSchema } from './CharacterCountOrderByAggregateInput.schema';
import { CharacterAvgOrderByAggregateInputObjectSchema } from './CharacterAvgOrderByAggregateInput.schema';
import { CharacterMaxOrderByAggregateInputObjectSchema } from './CharacterMaxOrderByAggregateInput.schema';
import { CharacterMinOrderByAggregateInputObjectSchema } from './CharacterMinOrderByAggregateInput.schema';
import { CharacterSumOrderByAggregateInputObjectSchema } from './CharacterSumOrderByAggregateInput.schema'

export const CharacterOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CharacterOrderByWithAggregationInput, Prisma.CharacterOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  experience: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  maxHealth: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  statusPoints: SortOrderSchema.optional(),
  gold: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CharacterOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  experience: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  maxHealth: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  statusPoints: SortOrderSchema.optional(),
  gold: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterSumOrderByAggregateInputObjectSchema).optional()
}).strict();
