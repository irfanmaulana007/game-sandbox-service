import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapAvgAggregateInputObjectSchema: z.ZodType<Prisma.GameMapAvgAggregateInputType, Prisma.GameMapAvgAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional()
}).strict();
export const GameMapAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional()
}).strict();
