import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { MonsterArgsObjectSchema } from './MonsterArgs.schema'

export const BattleLogSelectObjectSchema: z.ZodType<Prisma.BattleLogSelect, Prisma.BattleLogSelect> = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  monsterId: z.boolean().optional(),
  battleResult: z.boolean().optional(),
  characterHealthRemaining: z.boolean().optional(),
  monsterHealthRemaining: z.boolean().optional(),
  turnsTaken: z.boolean().optional(),
  experienceGained: z.boolean().optional(),
  goldGained: z.boolean().optional(),
  battleDate: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
export const BattleLogSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  monsterId: z.boolean().optional(),
  battleResult: z.boolean().optional(),
  characterHealthRemaining: z.boolean().optional(),
  monsterHealthRemaining: z.boolean().optional(),
  turnsTaken: z.boolean().optional(),
  experienceGained: z.boolean().optional(),
  goldGained: z.boolean().optional(),
  battleDate: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
