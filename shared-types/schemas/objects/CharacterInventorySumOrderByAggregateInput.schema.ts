import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterInventorySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventorySumOrderByAggregateInput, Prisma.CharacterInventorySumOrderByAggregateInput> = z.object({
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
export const CharacterInventorySumOrderByAggregateInputObjectZodSchema = z.object({
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional()
}).strict();
