import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { CharacterCreateNestedOneWithoutEquipmentInputObjectSchema } from './CharacterCreateNestedOneWithoutEquipmentInput.schema';
import { EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateNestedOneWithoutCharacterEquipmentInput.schema'

export const CharacterEquipmentCreateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateInput, Prisma.CharacterEquipmentCreateInput> = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutEquipmentInputObjectSchema),
  equipment: z.lazy(() => EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema)
}).strict();
export const CharacterEquipmentCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  slot: EquipmentSlotSchema,
  equippedAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutEquipmentInputObjectSchema),
  equipment: z.lazy(() => EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema)
}).strict();
