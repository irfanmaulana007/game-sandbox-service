import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterMinAggregateInputObjectSchema: z.ZodType<Prisma.MonsterMinAggregateInputType, Prisma.MonsterMinAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional(),
  health: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  experienceReward: z.literal(true).optional(),
  goldReward: z.literal(true).optional(),
  mapId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MonsterMinAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  level: z.literal(true).optional(),
  health: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  experienceReward: z.literal(true).optional(),
  goldReward: z.literal(true).optional(),
  mapId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
