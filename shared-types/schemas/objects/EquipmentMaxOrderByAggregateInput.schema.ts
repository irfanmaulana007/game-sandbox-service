import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const EquipmentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EquipmentMaxOrderByAggregateInput, Prisma.EquipmentMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const EquipmentMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
