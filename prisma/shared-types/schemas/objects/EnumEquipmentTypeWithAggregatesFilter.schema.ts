import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { NestedEnumEquipmentTypeWithAggregatesFilterObjectSchema } from './NestedEnumEquipmentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEquipmentTypeFilterObjectSchema } from './NestedEnumEquipmentTypeFilter.schema'

export const EnumEquipmentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEquipmentTypeWithAggregatesFilter, Prisma.EnumEquipmentTypeWithAggregatesFilter> = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema).optional()
}).strict();
export const EnumEquipmentTypeWithAggregatesFilterObjectZodSchema = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema).optional()
}).strict();
