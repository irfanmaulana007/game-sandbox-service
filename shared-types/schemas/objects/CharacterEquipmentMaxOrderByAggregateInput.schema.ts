import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentMaxOrderByAggregateInput, Prisma.CharacterEquipmentMaxOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentMaxOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional()
}).strict();
