import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BattleLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogAvgOrderByAggregateInput, Prisma.BattleLogAvgOrderByAggregateInput> = z.object({
  monsterId: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional()
}).strict();
export const BattleLogAvgOrderByAggregateInputObjectZodSchema = z.object({
  monsterId: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional()
}).strict();
