import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterEquipmentCountOrderByAggregateInputObjectSchema } from './CharacterEquipmentCountOrderByAggregateInput.schema';
import { CharacterEquipmentAvgOrderByAggregateInputObjectSchema } from './CharacterEquipmentAvgOrderByAggregateInput.schema';
import { CharacterEquipmentMaxOrderByAggregateInputObjectSchema } from './CharacterEquipmentMaxOrderByAggregateInput.schema';
import { CharacterEquipmentMinOrderByAggregateInputObjectSchema } from './CharacterEquipmentMinOrderByAggregateInput.schema';
import { CharacterEquipmentSumOrderByAggregateInputObjectSchema } from './CharacterEquipmentSumOrderByAggregateInput.schema'

export const CharacterEquipmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentOrderByWithAggregationInput, Prisma.CharacterEquipmentOrderByWithAggregationInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterEquipmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterEquipmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterEquipmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterEquipmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterEquipmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentOrderByWithAggregationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacterEquipmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacterEquipmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacterEquipmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacterEquipmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacterEquipmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
