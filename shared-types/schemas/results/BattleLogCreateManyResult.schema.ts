import { z } from 'zod';
export const BattleLogCreateManyResultSchema = z.object({
  count: z.number()
});