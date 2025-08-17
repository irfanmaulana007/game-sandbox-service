import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentCreateManyInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateManyInput, Prisma.CharacterEquipmentCreateManyInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
