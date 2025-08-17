import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemSelectObjectSchema } from './ItemSelect.schema';
import { ItemIncludeObjectSchema } from './ItemInclude.schema'

export const ItemArgsObjectSchema = z.object({
  select: z.lazy(() => ItemSelectObjectSchema).optional(),
  include: z.lazy(() => ItemIncludeObjectSchema).optional()
}).strict();
export const ItemArgsObjectZodSchema = z.object({
  select: z.lazy(() => ItemSelectObjectSchema).optional(),
  include: z.lazy(() => ItemIncludeObjectSchema).optional()
}).strict();
