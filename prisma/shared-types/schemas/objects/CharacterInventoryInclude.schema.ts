import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { ItemArgsObjectSchema } from './ItemArgs.schema'

export const CharacterInventoryIncludeObjectSchema: z.ZodType<Prisma.CharacterInventoryInclude, Prisma.CharacterInventoryInclude> = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const CharacterInventoryIncludeObjectZodSchema = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
