import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { MonsterArgsObjectSchema } from './MonsterArgs.schema'

export const BattleLogIncludeObjectSchema: z.ZodType<Prisma.BattleLogInclude, Prisma.BattleLogInclude> = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
export const BattleLogIncludeObjectZodSchema = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
