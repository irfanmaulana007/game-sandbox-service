import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema'

export const EnumEquipmentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEquipmentTypeFieldUpdateOperationsInput, Prisma.EnumEquipmentTypeFieldUpdateOperationsInput> = z.object({
  set: EquipmentTypeSchema.optional()
}).strict();
export const EnumEquipmentTypeFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: EquipmentTypeSchema.optional()
}).strict();
