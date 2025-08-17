import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedCreateWithoutEquipmentInput, Prisma.CharacterEquipmentUncheckedCreateWithoutEquipmentInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
