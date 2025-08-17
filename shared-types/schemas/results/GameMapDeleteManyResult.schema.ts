import { z } from 'zod';
export const GameMapDeleteManyResultSchema = z.object({
  count: z.number()
});