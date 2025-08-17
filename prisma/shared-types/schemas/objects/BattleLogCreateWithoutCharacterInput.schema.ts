import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { MonsterCreateNestedOneWithoutBattleLogsInputObjectSchema } from './MonsterCreateNestedOneWithoutBattleLogsInput.schema'

export const BattleLogCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateWithoutCharacterInput, Prisma.BattleLogCreateWithoutCharacterInput> = z.object({
  id: z.string().optional(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional(),
  monster: z.lazy(() => MonsterCreateNestedOneWithoutBattleLogsInputObjectSchema)
}).strict();
export const BattleLogCreateWithoutCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional(),
  monster: z.lazy(() => MonsterCreateNestedOneWithoutBattleLogsInputObjectSchema)
}).strict();
