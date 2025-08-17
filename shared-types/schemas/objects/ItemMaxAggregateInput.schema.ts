import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const ItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.ItemMaxAggregateInputType, Prisma.ItemMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  rarity: z.literal(true).optional(),
  dropRate: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ItemMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  description: z.literal(true).optional(),
  effectValue: z.literal(true).optional(),
  rarity: z.literal(true).optional(),
  dropRate: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
