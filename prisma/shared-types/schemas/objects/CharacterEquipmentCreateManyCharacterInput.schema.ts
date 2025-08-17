import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentCreateManyCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateManyCharacterInput, Prisma.CharacterEquipmentCreateManyCharacterInput> = z.object({
  id: z.string().optional(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentCreateManyCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
