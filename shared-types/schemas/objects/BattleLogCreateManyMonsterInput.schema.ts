import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const BattleLogCreateManyMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateManyMonsterInput, Prisma.BattleLogCreateManyMonsterInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
export const BattleLogCreateManyMonsterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
