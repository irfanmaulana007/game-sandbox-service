import { z } from 'zod';
export const CharacterCreateManyResultSchema = z.object({
  count: z.number()
});