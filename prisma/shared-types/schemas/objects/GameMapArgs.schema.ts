import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapSelectObjectSchema } from './GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './GameMapInclude.schema'

export const GameMapArgsObjectSchema = z.object({
  select: z.lazy(() => GameMapSelectObjectSchema).optional(),
  include: z.lazy(() => GameMapIncludeObjectSchema).optional()
}).strict();
export const GameMapArgsObjectZodSchema = z.object({
  select: z.lazy(() => GameMapSelectObjectSchema).optional(),
  include: z.lazy(() => GameMapIncludeObjectSchema).optional()
}).strict();
