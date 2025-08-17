import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BattleLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogSumOrderByAggregateInput, Prisma.BattleLogSumOrderByAggregateInput> = z.object({
  monsterId: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional()
}).strict();
export const BattleLogSumOrderByAggregateInputObjectZodSchema = z.object({
  monsterId: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional()
}).strict();
