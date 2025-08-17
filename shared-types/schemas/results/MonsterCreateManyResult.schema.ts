import { z } from 'zod';
export const MonsterCreateManyResultSchema = z.object({
  count: z.number()
});