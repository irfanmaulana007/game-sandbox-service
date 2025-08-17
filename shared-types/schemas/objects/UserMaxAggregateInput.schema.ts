import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxAggregateInputType, Prisma.UserMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  email: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  email: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
