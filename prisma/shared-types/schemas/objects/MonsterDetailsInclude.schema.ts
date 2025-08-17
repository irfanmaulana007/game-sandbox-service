import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterArgsObjectSchema } from './MonsterArgs.schema'

export const MonsterDetailsIncludeObjectSchema: z.ZodType<Prisma.MonsterDetailsInclude, Prisma.MonsterDetailsInclude> = z.object({
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
export const MonsterDetailsIncludeObjectZodSchema = z.object({
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
