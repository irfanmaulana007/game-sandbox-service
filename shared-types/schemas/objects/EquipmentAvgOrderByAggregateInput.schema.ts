import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const EquipmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EquipmentAvgOrderByAggregateInput, Prisma.EquipmentAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
export const EquipmentAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
