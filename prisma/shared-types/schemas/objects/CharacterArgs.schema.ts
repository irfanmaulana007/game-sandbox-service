import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterSelectObjectSchema } from './CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './CharacterInclude.schema'

export const CharacterArgsObjectSchema = z.object({
  select: z.lazy(() => CharacterSelectObjectSchema).optional(),
  include: z.lazy(() => CharacterIncludeObjectSchema).optional()
}).strict();
export const CharacterArgsObjectZodSchema = z.object({
  select: z.lazy(() => CharacterSelectObjectSchema).optional(),
  include: z.lazy(() => CharacterIncludeObjectSchema).optional()
}).strict();
