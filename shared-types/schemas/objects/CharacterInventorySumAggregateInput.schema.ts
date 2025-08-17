import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventorySumAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventorySumAggregateInputType, Prisma.CharacterInventorySumAggregateInputType> = z.object({
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const CharacterInventorySumAggregateInputObjectZodSchema = z.object({
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
