import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const CharacterEquipmentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedCreateInput, Prisma.CharacterEquipmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
export const CharacterEquipmentUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional()
}).strict();
