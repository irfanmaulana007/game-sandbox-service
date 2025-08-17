import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateNestedManyWithoutMonsterInput.schema'

export const MonsterUncheckedCreateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterUncheckedCreateWithoutDetailsInput, Prisma.MonsterUncheckedCreateWithoutDetailsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  level: z.number().int().optional(),
  health: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  experienceReward: z.number().int().optional(),
  goldReward: z.number().int().optional(),
  mapId: z.number().int().nullish(),
  createdAt: z.date().optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
export const MonsterUncheckedCreateWithoutDetailsInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  level: z.number().int().optional(),
  health: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  experienceReward: z.number().int().optional(),
  goldReward: z.number().int().optional(),
  mapId: z.number().int().nullish(),
  createdAt: z.date().optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
