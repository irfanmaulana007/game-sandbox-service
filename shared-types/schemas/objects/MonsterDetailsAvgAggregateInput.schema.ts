import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsAvgAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsAvgAggregateInputType, Prisma.MonsterDetailsAvgAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional()
}).strict();
export const MonsterDetailsAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional()
}).strict();
