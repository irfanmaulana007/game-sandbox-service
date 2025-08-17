import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateNestedOneWithoutMonsterInput.schema';
import { BattleLogCreateNestedManyWithoutMonsterInputObjectSchema } from './BattleLogCreateNestedManyWithoutMonsterInput.schema'

export const MonsterCreateWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterCreateWithoutMapInput, Prisma.MonsterCreateWithoutMapInput> = z.object({
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
  details: z.lazy(() => MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
export const MonsterCreateWithoutMapInputObjectZodSchema = z.object({
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
  details: z.lazy(() => MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogCreateNestedManyWithoutMonsterInputObjectSchema).optional()
}).strict();
