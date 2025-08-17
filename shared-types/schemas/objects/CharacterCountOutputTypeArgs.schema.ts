import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCountOutputTypeSelectObjectSchema } from './CharacterCountOutputTypeSelect.schema'

export const CharacterCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => CharacterCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CharacterCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => CharacterCountOutputTypeSelectObjectSchema).optional()
}).strict();
