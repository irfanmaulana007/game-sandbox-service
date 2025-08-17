import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemCountOutputTypeSelectObjectSchema } from './ItemCountOutputTypeSelect.schema'

export const ItemCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => ItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ItemCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => ItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
