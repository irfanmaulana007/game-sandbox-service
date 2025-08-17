import { z } from 'zod';
export const BattleLogFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});