import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CharacterOrderByRelationAggregateInput, Prisma.CharacterOrderByRelationAggregateInput> = z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CharacterOrderByRelationAggregateInputObjectZodSchema = z.object({
  _count: SortOrderSchema.optional()
}).strict();
