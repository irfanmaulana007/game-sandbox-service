import { z } from 'zod';
export const BattleLogDeleteManyResultSchema = z.object({
  count: z.number()
});