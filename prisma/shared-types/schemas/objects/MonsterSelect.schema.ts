import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapArgsObjectSchema } from './GameMapArgs.schema';
import { MonsterDetailsArgsObjectSchema } from './MonsterDetailsArgs.schema';
import { BattleLogFindManySchema } from '../findManyBattleLog.schema';
import { MonsterCountOutputTypeArgsObjectSchema } from './MonsterCountOutputTypeArgs.schema'

export const MonsterSelectObjectSchema: z.ZodType<Prisma.MonsterSelect, Prisma.MonsterSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  level: z.boolean().optional(),
  health: z.boolean().optional(),
  attack: z.boolean().optional(),
  defense: z.boolean().optional(),
  speed: z.boolean().optional(),
  critical: z.boolean().optional(),
  experienceReward: z.boolean().optional(),
  goldReward: z.boolean().optional(),
  mapId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  map: z.union([z.boolean(), z.lazy(() => GameMapArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => MonsterDetailsArgsObjectSchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MonsterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MonsterSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  level: z.boolean().optional(),
  health: z.boolean().optional(),
  attack: z.boolean().optional(),
  defense: z.boolean().optional(),
  speed: z.boolean().optional(),
  critical: z.boolean().optional(),
  experienceReward: z.boolean().optional(),
  goldReward: z.boolean().optional(),
  mapId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  map: z.union([z.boolean(), z.lazy(() => GameMapArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => MonsterDetailsArgsObjectSchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MonsterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
