import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { NestedEnumEquipmentSlotFilterObjectSchema } from './NestedEnumEquipmentSlotFilter.schema'

export const EnumEquipmentSlotFilterObjectSchema: z.ZodType<Prisma.EnumEquipmentSlotFilter, Prisma.EnumEquipmentSlotFilter> = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema)]).optional()
}).strict();
export const EnumEquipmentSlotFilterObjectZodSchema = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema)]).optional()
}).strict();
