import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MonsterOrderByRelationAggregateInputObjectSchema } from './MonsterOrderByRelationAggregateInput.schema'

export const GameMapOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GameMapOrderByWithRelationInput, Prisma.GameMapOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  monsters: z.lazy(() => MonsterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GameMapOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minLevel: SortOrderSchema.optional(),
  maxLevel: SortOrderSchema.optional(),
  difficulty: SortOrderSchema.optional(),
  backgroundImage: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  monsters: z.lazy(() => MonsterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
