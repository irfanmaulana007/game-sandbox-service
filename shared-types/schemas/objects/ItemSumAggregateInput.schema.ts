import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const ItemSumAggregateInputObjectSchema: z.ZodType<Prisma.ItemSumAggregateInputType, Prisma.ItemSumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
export const ItemSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
