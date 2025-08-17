import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const EquipmentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EquipmentSumOrderByAggregateInput, Prisma.EquipmentSumOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
export const EquipmentSumOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional()
}).strict();
