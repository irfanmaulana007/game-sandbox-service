import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { CharacterCreateNestedOneWithoutEquipmentInputObjectSchema } from './CharacterCreateNestedOneWithoutEquipmentInput.schema'

export const CharacterEquipmentCreateWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateWithoutEquipmentInput, Prisma.CharacterEquipmentCreateWithoutEquipmentInput> = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutEquipmentInputObjectSchema)
}).strict();
export const CharacterEquipmentCreateWithoutEquipmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutEquipmentInputObjectSchema)
}).strict();
