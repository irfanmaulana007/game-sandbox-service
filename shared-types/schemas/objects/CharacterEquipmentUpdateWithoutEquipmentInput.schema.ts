import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema } from './EnumEquipmentSlotFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema } from './CharacterUpdateOneRequiredWithoutEquipmentNestedInput.schema'

export const CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateWithoutEquipmentInput, Prisma.CharacterEquipmentUpdateWithoutEquipmentInput> = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentUpdateWithoutEquipmentInputObjectZodSchema = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema).optional()
}).strict();
