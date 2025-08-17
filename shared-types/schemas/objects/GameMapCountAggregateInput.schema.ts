import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapCountAggregateInputObjectSchema: z.ZodType<Prisma.GameMapCountAggregateInputType, Prisma.GameMapCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional(),
  difficulty: z.literal(true).optional(),
  backgroundImage: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GameMapCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional(),
  difficulty: z.literal(true).optional(),
  backgroundImage: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
