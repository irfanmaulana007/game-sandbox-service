import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameMapOrderByWithRelationInputObjectSchema } from './GameMapOrderByWithRelationInput.schema';
import { MonsterDetailsOrderByWithRelationInputObjectSchema } from './MonsterDetailsOrderByWithRelationInput.schema';
import { BattleLogOrderByRelationAggregateInputObjectSchema } from './BattleLogOrderByRelationAggregateInput.schema'

export const MonsterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MonsterOrderByWithRelationInput, Prisma.MonsterOrderByWithRelationInput> = z.object({
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
  mapId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  map: z.lazy(() => GameMapOrderByWithRelationInputObjectSchema).optional(),
  details: z.lazy(() => MonsterDetailsOrderByWithRelationInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MonsterOrderByWithRelationInputObjectZodSchema = z.object({
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
  mapId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  map: z.lazy(() => GameMapOrderByWithRelationInputObjectSchema).optional(),
  details: z.lazy(() => MonsterDetailsOrderByWithRelationInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
