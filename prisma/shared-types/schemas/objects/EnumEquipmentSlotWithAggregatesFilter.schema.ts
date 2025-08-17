import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema } from './NestedEnumEquipmentSlotWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEquipmentSlotFilterObjectSchema } from './NestedEnumEquipmentSlotFilter.schema'

export const EnumEquipmentSlotWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEquipmentSlotWithAggregatesFilter, Prisma.EnumEquipmentSlotWithAggregatesFilter> = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional()
}).strict();
export const EnumEquipmentSlotWithAggregatesFilterObjectZodSchema = z.object({
  equals: EquipmentSlotSchema.optional(),
  in: EquipmentSlotSchema.array().optional(),
  notIn: EquipmentSlotSchema.array().optional(),
  not: z.union([EquipmentSlotSchema, z.lazy(() => NestedEnumEquipmentSlotWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentSlotFilterObjectSchema).optional()
}).strict();
