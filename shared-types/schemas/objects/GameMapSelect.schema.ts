import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterFindManySchema } from '../findManyMonster.schema';
import { GameMapCountOutputTypeArgsObjectSchema } from './GameMapCountOutputTypeArgs.schema'

export const GameMapSelectObjectSchema: z.ZodType<Prisma.GameMapSelect, Prisma.GameMapSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  minLevel: z.boolean().optional(),
  maxLevel: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  backgroundImage: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  monsters: z.union([z.boolean(), z.lazy(() => MonsterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GameMapSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  minLevel: z.boolean().optional(),
  maxLevel: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  backgroundImage: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  monsters: z.union([z.boolean(), z.lazy(() => MonsterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GameMapCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
