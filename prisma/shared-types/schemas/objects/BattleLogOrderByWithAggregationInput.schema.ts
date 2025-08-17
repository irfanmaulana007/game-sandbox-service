import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BattleLogCountOrderByAggregateInputObjectSchema } from './BattleLogCountOrderByAggregateInput.schema';
import { BattleLogAvgOrderByAggregateInputObjectSchema } from './BattleLogAvgOrderByAggregateInput.schema';
import { BattleLogMaxOrderByAggregateInputObjectSchema } from './BattleLogMaxOrderByAggregateInput.schema';
import { BattleLogMinOrderByAggregateInputObjectSchema } from './BattleLogMinOrderByAggregateInput.schema';
import { BattleLogSumOrderByAggregateInputObjectSchema } from './BattleLogSumOrderByAggregateInput.schema'

export const BattleLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BattleLogOrderByWithAggregationInput, Prisma.BattleLogOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  battleResult: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional(),
  battleDate: SortOrderSchema.optional(),
  _count: z.lazy(() => BattleLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BattleLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BattleLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BattleLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BattleLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BattleLogOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  battleResult: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional(),
  battleDate: SortOrderSchema.optional(),
  _count: z.lazy(() => BattleLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BattleLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BattleLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BattleLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BattleLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
