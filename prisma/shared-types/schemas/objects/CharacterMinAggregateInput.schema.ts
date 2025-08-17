import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterMinAggregateInputObjectSchema: z.ZodType<Prisma.CharacterMinAggregateInputType, Prisma.CharacterMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  jobId: z.literal(true).optional(),
  level: z.literal(true).optional(),
  experience: z.literal(true).optional(),
  health: z.literal(true).optional(),
  maxHealth: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  statusPoints: z.literal(true).optional(),
  gold: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CharacterMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  jobId: z.literal(true).optional(),
  level: z.literal(true).optional(),
  experience: z.literal(true).optional(),
  health: z.literal(true).optional(),
  maxHealth: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  statusPoints: z.literal(true).optional(),
  gold: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
