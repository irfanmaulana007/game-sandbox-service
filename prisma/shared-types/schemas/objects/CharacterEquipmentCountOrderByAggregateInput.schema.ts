import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCountOrderByAggregateInput, Prisma.CharacterEquipmentCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
