import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const BattleLogCreateManyCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateManyCharacterInput, Prisma.BattleLogCreateManyCharacterInput> = z.object({
  id: z.string().optional(),
  monsterId: z.number().int(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
export const BattleLogCreateManyCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  monsterId: z.number().int(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
