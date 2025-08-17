import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterSumAggregateInputObjectSchema: z.ZodType<Prisma.MonsterSumAggregateInputType, Prisma.MonsterSumAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  health: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  experienceReward: z.literal(true).optional(),
  goldReward: z.literal(true).optional(),
  mapId: z.literal(true).optional()
}).strict();
export const MonsterSumAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  health: z.literal(true).optional(),
  attack: z.literal(true).optional(),
  defense: z.literal(true).optional(),
  speed: z.literal(true).optional(),
  critical: z.literal(true).optional(),
  experienceReward: z.literal(true).optional(),
  goldReward: z.literal(true).optional(),
  mapId: z.literal(true).optional()
}).strict();
