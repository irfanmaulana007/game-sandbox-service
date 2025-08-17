import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CharacterCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacterCountOrderByAggregateInput, Prisma.CharacterCountOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
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
  gold: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CharacterCountOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
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
  gold: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
