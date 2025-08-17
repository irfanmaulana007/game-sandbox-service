import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventorySelectObjectSchema } from './CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './CharacterInventoryInclude.schema'

export const CharacterInventoryArgsObjectSchema = z.object({
  select: z.lazy(() => CharacterInventorySelectObjectSchema).optional(),
  include: z.lazy(() => CharacterInventoryIncludeObjectSchema).optional()
}).strict();
export const CharacterInventoryArgsObjectZodSchema = z.object({
  select: z.lazy(() => CharacterInventorySelectObjectSchema).optional(),
  include: z.lazy(() => CharacterInventoryIncludeObjectSchema).optional()
}).strict();
