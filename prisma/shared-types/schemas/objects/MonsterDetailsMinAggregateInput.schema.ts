import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsMinAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsMinAggregateInputType, Prisma.MonsterDetailsMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MonsterDetailsMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
