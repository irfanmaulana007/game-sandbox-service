import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterEquipmentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentOrderByRelationAggregateInput, Prisma.CharacterEquipmentOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CharacterEquipmentOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
