import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterInventoryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryAvgOrderByAggregateInput, Prisma.CharacterInventoryAvgOrderByAggregateInput> = z.object({
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const CharacterInventoryAvgOrderByAggregateInputObjectZodSchema = z.object({
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
