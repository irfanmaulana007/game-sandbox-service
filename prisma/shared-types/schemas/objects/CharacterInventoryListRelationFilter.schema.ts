import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereInputObjectSchema } from './CharacterInventoryWhereInput.schema'

export const CharacterInventoryListRelationFilterObjectSchema: z.ZodType<Prisma.CharacterInventoryListRelationFilter, Prisma.CharacterInventoryListRelationFilter> = z.object({
  every: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional()
}).strict();
export const CharacterInventoryListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterInventoryWhereInputObjectSchema).optional()
}).strict();
