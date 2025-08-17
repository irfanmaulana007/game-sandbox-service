import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentMinOrderByAggregateInput, Prisma.CharacterEquipmentMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
