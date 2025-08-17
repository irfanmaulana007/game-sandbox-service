import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema'

export const NestedEnumEquipmentTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumEquipmentTypeFilter, Prisma.NestedEnumEquipmentTypeFilter> = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumEquipmentTypeFilterObjectZodSchema = z.object({
  equals: EquipmentTypeSchema.optional(),
  in: EquipmentTypeSchema.array().optional(),
  notIn: EquipmentTypeSchema.array().optional(),
  not: z.union([EquipmentTypeSchema, z.lazy(() => NestedEnumEquipmentTypeFilterObjectSchema)]).optional()
}).strict();
