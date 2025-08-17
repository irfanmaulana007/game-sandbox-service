import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapWhereInputObjectSchema } from './GameMapWhereInput.schema'

export const GameMapNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GameMapNullableScalarRelationFilter, Prisma.GameMapNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => GameMapWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => GameMapWhereInputObjectSchema).nullish()
}).strict();
export const GameMapNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => GameMapWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => GameMapWhereInputObjectSchema).nullish()
}).strict();
