import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema } from './EnumEquipmentSlotFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema } from './CharacterUpdateOneRequiredWithoutEquipmentNestedInput.schema';
import { EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema } from './EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInput.schema'

export const CharacterEquipmentUpdateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateInput, Prisma.CharacterEquipmentUpdateInput> = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema).optional(),
  equipment: z.lazy(() => EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentUpdateInputObjectZodSchema = z.object({
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema).optional(),
  equipment: z.lazy(() => EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema).optional()
}).strict();
