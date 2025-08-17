import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogSelectObjectSchema } from './BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './BattleLogInclude.schema'

export const BattleLogArgsObjectSchema = z.object({
  select: z.lazy(() => BattleLogSelectObjectSchema).optional(),
  include: z.lazy(() => BattleLogIncludeObjectSchema).optional()
}).strict();
export const BattleLogArgsObjectZodSchema = z.object({
  select: z.lazy(() => BattleLogSelectObjectSchema).optional(),
  include: z.lazy(() => BattleLogIncludeObjectSchema).optional()
}).strict();
