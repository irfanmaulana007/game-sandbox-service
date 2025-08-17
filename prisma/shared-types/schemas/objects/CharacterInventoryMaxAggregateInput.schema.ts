import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryMaxAggregateInputType, Prisma.CharacterInventoryMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const CharacterInventoryMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  itemId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
