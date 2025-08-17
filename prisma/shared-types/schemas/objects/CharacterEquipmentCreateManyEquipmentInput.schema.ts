import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentCreateManyEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateManyEquipmentInput, Prisma.CharacterEquipmentCreateManyEquipmentInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentCreateManyEquipmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
