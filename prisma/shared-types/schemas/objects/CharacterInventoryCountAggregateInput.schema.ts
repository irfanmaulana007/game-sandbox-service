import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryCountAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCountAggregateInputType, Prisma.CharacterInventoryCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CharacterInventoryCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
