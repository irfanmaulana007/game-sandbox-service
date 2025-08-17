import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const BattleLogUncheckedCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogUncheckedCreateWithoutCharacterInput, Prisma.BattleLogUncheckedCreateWithoutCharacterInput> = z.object({
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
export const BattleLogUncheckedCreateWithoutCharacterInputObjectZodSchema = z.object({
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
