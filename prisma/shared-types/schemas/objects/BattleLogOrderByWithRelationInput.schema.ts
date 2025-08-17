import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByWithRelationInputObjectSchema } from './CharacterOrderByWithRelationInput.schema';
import { MonsterOrderByWithRelationInputObjectSchema } from './MonsterOrderByWithRelationInput.schema'

export const BattleLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BattleLogOrderByWithRelationInput, Prisma.BattleLogOrderByWithRelationInput> = z.object({
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
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  monster: z.lazy(() => MonsterOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BattleLogOrderByWithRelationInputObjectZodSchema = z.object({
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
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  monster: z.lazy(() => MonsterOrderByWithRelationInputObjectSchema).optional()
}).strict();
