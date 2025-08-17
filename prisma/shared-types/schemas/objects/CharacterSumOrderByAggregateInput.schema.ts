import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterSumOrderByAggregateInput, Prisma.CharacterSumOrderByAggregateInput> = z.object({
  jobId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  experience: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  maxHealth: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  statusPoints: SortOrderSchema.optional(),
  gold: SortOrderSchema.optional()
}).strict();
export const CharacterSumOrderByAggregateInputObjectZodSchema = z.object({
  jobId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  experience: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  maxHealth: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  statusPoints: SortOrderSchema.optional(),
  gold: SortOrderSchema.optional()
}).strict();
