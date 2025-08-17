import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateNestedManyWithoutMonsterInput.schema'

export const MonsterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MonsterUncheckedCreateInput, Prisma.MonsterUncheckedCreateInput> = z.object({
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
  details: z.lazy(() => MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
export const MonsterUncheckedCreateInputObjectZodSchema = z.object({
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
  details: z.lazy(() => MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
