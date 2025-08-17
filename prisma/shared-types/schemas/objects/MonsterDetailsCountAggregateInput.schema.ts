import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsCountAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsCountAggregateInputType, Prisma.MonsterDetailsCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  dropTable: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MonsterDetailsCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  rank: z.literal(true).optional(),
  description: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  dropTable: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
