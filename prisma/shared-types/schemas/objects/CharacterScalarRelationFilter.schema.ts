import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

export const CharacterScalarRelationFilterObjectSchema: z.ZodType<Prisma.CharacterScalarRelationFilter, Prisma.CharacterScalarRelationFilter> = z.object({
  is: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
