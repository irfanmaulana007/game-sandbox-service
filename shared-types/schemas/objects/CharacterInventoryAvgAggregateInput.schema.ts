import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryAvgAggregateInputType, Prisma.CharacterInventoryAvgAggregateInputType> = z.object({
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
export const CharacterInventoryAvgAggregateInputObjectZodSchema = z.object({
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional()
}).strict();
