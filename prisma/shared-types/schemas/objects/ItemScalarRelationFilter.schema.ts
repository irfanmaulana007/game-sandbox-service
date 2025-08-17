import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

export const ItemScalarRelationFilterObjectSchema: z.ZodType<Prisma.ItemScalarRelationFilter, Prisma.ItemScalarRelationFilter> = z.object({
  is: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
