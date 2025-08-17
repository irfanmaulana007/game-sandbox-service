import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const JobClassSumAggregateInputObjectSchema: z.ZodType<Prisma.JobClassSumAggregateInputType, Prisma.JobClassSumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  baseHealth: z.literal(true).optional(),
  baseAttack: z.literal(true).optional(),
  baseDefense: z.literal(true).optional(),
  baseSpeed: z.literal(true).optional(),
  baseCritical: z.literal(true).optional(),
  healthPerLevel: z.literal(true).optional(),
  attackPerLevel: z.literal(true).optional(),
  defensePerLevel: z.literal(true).optional(),
  speedPerLevel: z.literal(true).optional(),
  criticalPerLevel: z.literal(true).optional()
}).strict();
export const JobClassSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  baseHealth: z.literal(true).optional(),
  baseAttack: z.literal(true).optional(),
  baseDefense: z.literal(true).optional(),
  baseSpeed: z.literal(true).optional(),
  baseCritical: z.literal(true).optional(),
  healthPerLevel: z.literal(true).optional(),
  attackPerLevel: z.literal(true).optional(),
  defensePerLevel: z.literal(true).optional(),
  speedPerLevel: z.literal(true).optional(),
  criticalPerLevel: z.literal(true).optional()
}).strict();
