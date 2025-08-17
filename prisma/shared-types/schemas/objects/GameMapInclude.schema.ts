import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterFindManySchema } from '../findManyMonster.schema';
import { GameMapCountOutputTypeArgsObjectSchema } from './GameMapCountOutputTypeArgs.schema'

export const GameMapIncludeObjectSchema: z.ZodType<Prisma.GameMapInclude, Prisma.GameMapInclude> = z.object({
  monsters: z.union([z.boolean(), z.lazy(() => MonsterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GameMapIncludeObjectZodSchema = z.object({
  monsters: z.union([z.boolean(), z.lazy(() => MonsterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
