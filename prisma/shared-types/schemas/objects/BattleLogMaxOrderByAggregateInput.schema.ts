import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BattleLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogMaxOrderByAggregateInput, Prisma.BattleLogMaxOrderByAggregateInput> = z.object({
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
export const BattleLogMaxOrderByAggregateInputObjectZodSchema = z.object({
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
