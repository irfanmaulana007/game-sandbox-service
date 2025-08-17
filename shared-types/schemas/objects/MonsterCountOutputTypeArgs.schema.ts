import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCountOutputTypeSelectObjectSchema } from './MonsterCountOutputTypeSelect.schema'

export const MonsterCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => MonsterCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MonsterCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => MonsterCountOutputTypeSelectObjectSchema).optional()
}).strict();
