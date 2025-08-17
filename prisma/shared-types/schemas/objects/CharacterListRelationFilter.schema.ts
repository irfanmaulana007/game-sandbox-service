import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

export const CharacterListRelationFilterObjectSchema: z.ZodType<Prisma.CharacterListRelationFilter, Prisma.CharacterListRelationFilter> = z.object({
  every: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
