import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentSumOrderByAggregateInput, Prisma.CharacterEquipmentSumOrderByAggregateInput> = z.object({
  equipmentId: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentSumOrderByAggregateInputObjectZodSchema = z.object({
  equipmentId: SortOrderSchema.optional()
}).strict();
