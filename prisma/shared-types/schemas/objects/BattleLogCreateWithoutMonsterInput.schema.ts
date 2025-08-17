import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { CharacterCreateNestedOneWithoutBattleLogsInputObjectSchema } from './CharacterCreateNestedOneWithoutBattleLogsInput.schema'

export const BattleLogCreateWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateWithoutMonsterInput, Prisma.BattleLogCreateWithoutMonsterInput> = z.object({
  id: z.string().optional(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutBattleLogsInputObjectSchema)
}).strict();
export const BattleLogCreateWithoutMonsterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  battleResult: BattleResultSchema,
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutBattleLogsInputObjectSchema)
}).strict();
