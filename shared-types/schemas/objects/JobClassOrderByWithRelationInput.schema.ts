import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema'

export const JobClassOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.JobClassOrderByWithRelationInput, Prisma.JobClassOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const JobClassOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseHealth: SortOrderSchema.optional(),
  baseAttack: SortOrderSchema.optional(),
  baseDefense: SortOrderSchema.optional(),
  baseSpeed: SortOrderSchema.optional(),
  baseCritical: SortOrderSchema.optional(),
  healthPerLevel: SortOrderSchema.optional(),
  attackPerLevel: SortOrderSchema.optional(),
  defensePerLevel: SortOrderSchema.optional(),
  speedPerLevel: SortOrderSchema.optional(),
  criticalPerLevel: SortOrderSchema.optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
