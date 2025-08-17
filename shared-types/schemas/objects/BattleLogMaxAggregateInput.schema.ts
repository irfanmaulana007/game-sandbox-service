import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const BattleLogMaxAggregateInputObjectSchema: z.ZodType<Prisma.BattleLogMaxAggregateInputType, Prisma.BattleLogMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  battleResult: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional(),
  battleDate: z.literal(true).optional()
}).strict();
export const BattleLogMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  characterId: z.literal(true).optional(),
  monsterId: z.literal(true).optional(),
  battleResult: z.literal(true).optional(),
  characterHealthRemaining: z.literal(true).optional(),
  monsterHealthRemaining: z.literal(true).optional(),
  turnsTaken: z.literal(true).optional(),
  experienceGained: z.literal(true).optional(),
  goldGained: z.literal(true).optional(),
  battleDate: z.literal(true).optional()
}).strict();
