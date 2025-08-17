import { z } from 'zod';
export const BattleLogFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  characterId: z.string(),
  monsterId: z.number().int(),
  battleResult: z.unknown(),
  characterHealthRemaining: z.number().int(),
  monsterHealthRemaining: z.number().int(),
  turnsTaken: z.number().int(),
  experienceGained: z.number().int(),
  goldGained: z.number().int(),
  battleDate: z.date(),
  character: z.unknown(),
  monster: z.unknown()
}));