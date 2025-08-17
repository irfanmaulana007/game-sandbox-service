import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentCountAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCountAggregateInputType, Prisma.CharacterEquipmentCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CharacterEquipmentCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
