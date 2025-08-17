import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapMaxAggregateInputObjectSchema: z.ZodType<Prisma.GameMapMaxAggregateInputType, Prisma.GameMapMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional(),
  difficulty: z.literal(true).optional(),
  backgroundImage: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const GameMapMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  maxLevel: z.literal(true).optional(),
  difficulty: z.literal(true).optional(),
  backgroundImage: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
