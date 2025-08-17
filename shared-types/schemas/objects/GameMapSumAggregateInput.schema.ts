import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapSumAggregateInputObjectSchema: z.ZodType<Prisma.GameMapSumAggregateInputType, Prisma.GameMapSumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional()
}).strict();
export const GameMapSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional()
}).strict();
