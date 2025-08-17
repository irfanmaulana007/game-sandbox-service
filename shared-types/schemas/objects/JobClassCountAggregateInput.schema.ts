import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const JobClassCountAggregateInputObjectSchema: z.ZodType<Prisma.JobClassCountAggregateInputType, Prisma.JobClassCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  baseHealth: z.literal(true).optional(),
  baseAttack: z.literal(true).optional(),
  baseDefense: z.literal(true).optional(),
  baseSpeed: z.literal(true).optional(),
  baseCritical: z.literal(true).optional(),
  healthPerLevel: z.literal(true).optional(),
  attackPerLevel: z.literal(true).optional(),
  defensePerLevel: z.literal(true).optional(),
  speedPerLevel: z.literal(true).optional(),
  criticalPerLevel: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const JobClassCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  baseHealth: z.literal(true).optional(),
  baseAttack: z.literal(true).optional(),
  baseDefense: z.literal(true).optional(),
  baseSpeed: z.literal(true).optional(),
  baseCritical: z.literal(true).optional(),
  healthPerLevel: z.literal(true).optional(),
  attackPerLevel: z.literal(true).optional(),
  defensePerLevel: z.literal(true).optional(),
  speedPerLevel: z.literal(true).optional(),
  criticalPerLevel: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
