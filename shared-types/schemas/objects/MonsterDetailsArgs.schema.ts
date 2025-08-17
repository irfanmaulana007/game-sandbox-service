import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsSelectObjectSchema } from './MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './MonsterDetailsInclude.schema'

export const MonsterDetailsArgsObjectSchema = z.object({
  select: z.lazy(() => MonsterDetailsSelectObjectSchema).optional(),
  include: z.lazy(() => MonsterDetailsIncludeObjectSchema).optional()
}).strict();
export const MonsterDetailsArgsObjectZodSchema = z.object({
  select: z.lazy(() => MonsterDetailsSelectObjectSchema).optional(),
  include: z.lazy(() => MonsterDetailsIncludeObjectSchema).optional()
}).strict();
