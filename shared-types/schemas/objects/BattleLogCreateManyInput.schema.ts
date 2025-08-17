import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const BattleLogCreateManyInputObjectSchema: z.ZodType<Prisma.BattleLogCreateManyInput, Prisma.BattleLogCreateManyInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  monsterId: z.number().int(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
export const BattleLogCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  monsterId: z.number().int(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional()
}).strict();
