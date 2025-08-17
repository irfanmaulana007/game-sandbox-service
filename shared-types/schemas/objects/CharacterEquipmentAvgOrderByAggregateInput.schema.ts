import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentAvgOrderByAggregateInput, Prisma.CharacterEquipmentAvgOrderByAggregateInput> = z.object({
  equipmentId: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentAvgOrderByAggregateInputObjectZodSchema = z.object({
  equipmentId: SortOrderSchema.optional()
}).strict();
