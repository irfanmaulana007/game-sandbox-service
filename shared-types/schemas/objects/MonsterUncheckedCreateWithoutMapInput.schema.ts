import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateNestedManyWithoutMonsterInput.schema'

export const MonsterUncheckedCreateWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterUncheckedCreateWithoutMapInput, Prisma.MonsterUncheckedCreateWithoutMapInput> = z.object({
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
  createdAt: z.date().optional(),
  details: z.lazy(() => MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
export const MonsterUncheckedCreateWithoutMapInputObjectZodSchema = z.object({
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
  createdAt: z.date().optional(),
  details: z.lazy(() => MonsterDetailsUncheckedCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
