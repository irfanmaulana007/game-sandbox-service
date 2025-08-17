import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsSumAggregateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsSumAggregateInputType, Prisma.MonsterDetailsSumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional()
}).strict();
export const MonsterDetailsSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  monsterId: z.literal(true).optional()
}).strict();
