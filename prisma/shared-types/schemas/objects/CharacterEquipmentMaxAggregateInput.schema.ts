import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentMaxAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentMaxAggregateInputType, Prisma.CharacterEquipmentMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional()
}).strict();
export const CharacterEquipmentMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  equipmentId: z.literal(true).optional(),
  slot: z.literal(true).optional(),
  equippedAt: z.literal(true).optional()
}).strict();
