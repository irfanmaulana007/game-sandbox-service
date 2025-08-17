import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsMaxAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsMaxAggregateInputType, Prisma.MonsterDetailsMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MonsterDetailsMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
