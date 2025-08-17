import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema } from './EnumEquipmentSlotFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

export const CharacterEquipmentUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedUpdateInput, Prisma.CharacterEquipmentUncheckedUpdateInput> = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipmentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterEquipmentUncheckedUpdateInputObjectZodSchema = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipmentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
