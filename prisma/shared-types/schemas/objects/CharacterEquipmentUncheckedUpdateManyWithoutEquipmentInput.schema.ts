import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema } from './EnumEquipmentSlotFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

export const CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInput, Prisma.CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInput> = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInputObjectZodSchema = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slot: z.union([EquipmentSlotSchema, z.lazy(() => EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema)]).optional(),
  equippedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
