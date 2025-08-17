import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateNestedOneWithoutCharacterEquipmentInput.schema'

export const CharacterEquipmentCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateWithoutCharacterInput, Prisma.CharacterEquipmentCreateWithoutCharacterInput> = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  equipment: z.lazy(() => EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema)
}).strict();
export const CharacterEquipmentCreateWithoutCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  equipment: z.lazy(() => EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema)
}).strict();
