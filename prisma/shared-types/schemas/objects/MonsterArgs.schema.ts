import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterSelectObjectSchema } from './MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './MonsterInclude.schema'

export const MonsterArgsObjectSchema = z.object({
  select: z.lazy(() => MonsterSelectObjectSchema).optional(),
  include: z.lazy(() => MonsterIncludeObjectSchema).optional()
}).strict();
export const MonsterArgsObjectZodSchema = z.object({
  select: z.lazy(() => MonsterSelectObjectSchema).optional(),
  include: z.lazy(() => MonsterIncludeObjectSchema).optional()
}).strict();
