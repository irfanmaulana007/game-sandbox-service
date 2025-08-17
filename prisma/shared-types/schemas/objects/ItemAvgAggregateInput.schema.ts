import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const ItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.ItemAvgAggregateInputType, Prisma.ItemAvgAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
export const ItemAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
