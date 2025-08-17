import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapCreateNestedOneWithoutMonstersInputObjectSchema } from './GameMapCreateNestedOneWithoutMonstersInput.schema';
import { MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateNestedOneWithoutMonsterInput.schema'

export const MonsterCreateWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.MonsterCreateWithoutBattleLogsInput, Prisma.MonsterCreateWithoutBattleLogsInput> = z.object({
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
  map: z.lazy(() => GameMapCreateNestedOneWithoutMonstersInputObjectSchema).optional(),
  details: z.lazy(() => MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema).optional()
}).strict();
export const MonsterCreateWithoutBattleLogsInputObjectZodSchema = z.object({
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
  map: z.lazy(() => GameMapCreateNestedOneWithoutMonstersInputObjectSchema).optional(),
  details: z.lazy(() => MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema).optional()
}).strict();
