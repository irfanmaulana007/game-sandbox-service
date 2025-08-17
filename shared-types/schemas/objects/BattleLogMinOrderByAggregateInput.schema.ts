import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BattleLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogMinOrderByAggregateInput, Prisma.BattleLogMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  battleResult: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional(),
  battleDate: SortOrderSchema.optional()
}).strict();
export const BattleLogMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  battleResult: SortOrderSchema.optional(),
  characterHealthRemaining: SortOrderSchema.optional(),
  monsterHealthRemaining: SortOrderSchema.optional(),
  turnsTaken: SortOrderSchema.optional(),
  experienceGained: SortOrderSchema.optional(),
  goldGained: SortOrderSchema.optional(),
  battleDate: SortOrderSchema.optional()
}).strict();
