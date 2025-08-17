import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterSumAggregateInputObjectSchema: z.ZodType<Prisma.CharacterSumAggregateInputType, Prisma.CharacterSumAggregateInputType> = z.object({
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
  gold: z.literal(true).optional()
}).strict();
export const CharacterSumAggregateInputObjectZodSchema = z.object({
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
  gold: z.literal(true).optional()
}).strict();
