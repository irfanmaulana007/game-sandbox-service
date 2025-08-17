import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedCreateWithoutCharacterInput, Prisma.CharacterEquipmentUncheckedCreateWithoutCharacterInput> = z.object({
  id: z.string().optional(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
