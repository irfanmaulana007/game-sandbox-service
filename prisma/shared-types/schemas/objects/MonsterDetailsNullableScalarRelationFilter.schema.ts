import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsWhereInputObjectSchema } from './MonsterDetailsWhereInput.schema'

export const MonsterDetailsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MonsterDetailsNullableScalarRelationFilter, Prisma.MonsterDetailsNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => MonsterDetailsWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => MonsterDetailsWhereInputObjectSchema).nullish()
}).strict();
export const MonsterDetailsNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => MonsterDetailsWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => MonsterDetailsWhereInputObjectSchema).nullish()
}).strict();
