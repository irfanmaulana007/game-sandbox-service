import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const BattleLogCountAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogCountAggregateInputType, Prisma.BattleLogCountAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  battleResult: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional(),
  battleDate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BattleLogCountAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  battleResult: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional(),
  battleDate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
