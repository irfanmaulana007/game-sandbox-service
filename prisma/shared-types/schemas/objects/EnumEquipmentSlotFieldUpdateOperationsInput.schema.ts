import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const EnumEquipmentSlotFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEquipmentSlotFieldUpdateOperationsInput, Prisma.EnumEquipmentSlotFieldUpdateOperationsInput> = z.object({
  set: EquipmentSlotSchema.optional()
}).strict();
export const EnumEquipmentSlotFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: EquipmentSlotSchema.optional()
}).strict();
