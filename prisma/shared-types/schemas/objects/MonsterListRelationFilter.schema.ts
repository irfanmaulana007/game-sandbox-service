import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const MonsterListRelationFilterObjectSchema: z.ZodType<Prisma.MonsterListRelationFilter, Prisma.MonsterListRelationFilter> = z.object({
  every: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  some: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  none: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
export const MonsterListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  some: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  none: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
