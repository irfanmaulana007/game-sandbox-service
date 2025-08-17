import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const MonsterScalarRelationFilterObjectSchema: z.ZodType<Prisma.MonsterScalarRelationFilter, Prisma.MonsterScalarRelationFilter> = z.object({
  is: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
export const MonsterScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
