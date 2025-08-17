import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { NestedEnumEquipmentTypeFilterObjectSchema } from './NestedEnumEquipmentTypeFilter.schema'

export const EnumEquipmentTypeFilterObjectSchema: z.ZodType<Prisma.EnumEquipmentTypeFilter, Prisma.EnumEquipmentTypeFilter> = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumEquipmentTypeFilterObjectZodSchema = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema)]).optional()
}).strict();
