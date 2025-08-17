import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterMinOrderByAggregateInput, Prisma.MonsterMinOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MonsterMinOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
