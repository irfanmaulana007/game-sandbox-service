import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentMinAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentMinAggregateInputType, Prisma.CharacterEquipmentMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional()
}).strict();
export const CharacterEquipmentMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional()
}).strict();
