import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EquipmentCountOrderByAggregateInputObjectSchema } from './EquipmentCountOrderByAggregateInput.schema';
import { EquipmentAvgOrderByAggregateInputObjectSchema } from './EquipmentAvgOrderByAggregateInput.schema';
import { EquipmentMaxOrderByAggregateInputObjectSchema } from './EquipmentMaxOrderByAggregateInput.schema';
import { EquipmentMinOrderByAggregateInputObjectSchema } from './EquipmentMinOrderByAggregateInput.schema';
import { EquipmentSumOrderByAggregateInputObjectSchema } from './EquipmentSumOrderByAggregateInput.schema'

export const EquipmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EquipmentOrderByWithAggregationInput, Prisma.EquipmentOrderByWithAggregationInput> = z.object({
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
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EquipmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EquipmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EquipmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EquipmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EquipmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EquipmentOrderByWithAggregationInputObjectZodSchema = z.object({
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
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EquipmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EquipmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EquipmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EquipmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EquipmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
