import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryMinAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryMinAggregateInputType, Prisma.CharacterInventoryMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const CharacterInventoryMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
