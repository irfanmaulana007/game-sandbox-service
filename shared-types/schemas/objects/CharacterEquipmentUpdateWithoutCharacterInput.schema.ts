import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema } from './EnumEquipmentSlotFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema } from './EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInput.schema'

export const CharacterEquipmentUpdateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateWithoutCharacterInput, Prisma.CharacterEquipmentUpdateWithoutCharacterInput> = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipment: z.lazy(() => EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentUpdateWithoutCharacterInputObjectZodSchema = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipment: z.lazy(() => EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema).optional()
}).strict();
