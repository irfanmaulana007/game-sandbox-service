import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const MonsterAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MonsterAvgOrderByAggregateInput, Prisma.MonsterAvgOrderByAggregateInput> = z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: SortOrderSchema.optional()
}).strict();
export const MonsterAvgOrderByAggregateInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  health: SortOrderSchema.optional(),
  attack: SortOrderSchema.optional(),
  defense: SortOrderSchema.optional(),
  speed: SortOrderSchema.optional(),
  critical: SortOrderSchema.optional(),
  experienceReward: SortOrderSchema.optional(),
  goldReward: SortOrderSchema.optional(),
  mapId: SortOrderSchema.optional()
}).strict();
