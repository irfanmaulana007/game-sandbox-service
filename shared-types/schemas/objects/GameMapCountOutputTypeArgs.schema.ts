import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapCountOutputTypeSelectObjectSchema } from './GameMapCountOutputTypeSelect.schema'

export const GameMapCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => GameMapCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GameMapCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => GameMapCountOutputTypeSelectObjectSchema).optional()
}).strict();
