import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { JobClassOrderByWithRelationInputObjectSchema } from './JobClassOrderByWithRelationInput.schema';
import { CharacterEquipmentOrderByRelationAggregateInputObjectSchema } from './CharacterEquipmentOrderByRelationAggregateInput.schema';
import { CharacterInventoryOrderByRelationAggregateInputObjectSchema } from './CharacterInventoryOrderByRelationAggregateInput.schema';
import { BattleLogOrderByRelationAggregateInputObjectSchema } from './BattleLogOrderByRelationAggregateInput.schema'

export const CharacterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CharacterOrderByWithRelationInput, Prisma.CharacterOrderByWithRelationInput> = z.object({
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
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  job: z.lazy(() => JobClassOrderByWithRelationInputObjectSchema).optional(),
  equipment: z.lazy(() => CharacterEquipmentOrderByRelationAggregateInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryOrderByRelationAggregateInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CharacterOrderByWithRelationInputObjectZodSchema = z.object({
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
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  job: z.lazy(() => JobClassOrderByWithRelationInputObjectSchema).optional(),
  equipment: z.lazy(() => CharacterEquipmentOrderByRelationAggregateInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryOrderByRelationAggregateInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
