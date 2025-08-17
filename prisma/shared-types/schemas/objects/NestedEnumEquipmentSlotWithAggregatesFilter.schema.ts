import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEquipmentSlotFilterObjectSchema } from './NestedEnumEquipmentSlotFilter.schema'

export const NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumEquipmentSlotWithAggregatesFilter, Prisma.NestedEnumEquipmentSlotWithAggregatesFilter> = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional()
}).strict();
export const NestedEnumEquipmentSlotWithAggregatesFilterObjectZodSchema = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional()
}).strict();
