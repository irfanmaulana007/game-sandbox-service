import { z } from 'zod';
export const CharacterDeleteManyResultSchema = z.object({
  count: z.number()
});