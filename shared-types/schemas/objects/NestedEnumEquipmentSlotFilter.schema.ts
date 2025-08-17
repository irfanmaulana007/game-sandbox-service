import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema'

export const NestedEnumEquipmentSlotFilterObjectSchema: z.ZodType<Prisma.NestedEnumEquipmentSlotFilter, Prisma.NestedEnumEquipmentSlotFilter> = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumEquipmentSlotFilterObjectZodSchema = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema)]).optional()
}).strict();
