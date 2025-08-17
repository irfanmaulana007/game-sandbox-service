import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapArgsObjectSchema } from './GameMapArgs.schema';
import { MonsterDetailsArgsObjectSchema } from './MonsterDetailsArgs.schema';
import { BattleLogFindManySchema } from '../findManyBattleLog.schema';
import { MonsterCountOutputTypeArgsObjectSchema } from './MonsterCountOutputTypeArgs.schema'

export const MonsterIncludeObjectSchema: z.ZodType<Prisma.MonsterInclude, Prisma.MonsterInclude> = z.object({
  map: z.union([z.boolean(), z.lazy(() => GameMapArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => MonsterDetailsArgsObjectSchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MonsterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MonsterIncludeObjectZodSchema = z.object({
  map: z.union([z.boolean(), z.lazy(() => GameMapArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => MonsterDetailsArgsObjectSchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MonsterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
