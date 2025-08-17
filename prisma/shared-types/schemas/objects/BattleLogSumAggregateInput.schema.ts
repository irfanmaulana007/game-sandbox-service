import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const BattleLogSumAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogSumAggregateInputType, Prisma.BattleLogSumAggregateInputType> = z.object({
  monsterId: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional()
}).strict();
export const BattleLogSumAggregateInputObjectZodSchema = z.object({
  monsterId: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional()
}).strict();
