import { z } from 'zod';
export const CharacterInventoryCreateManyResultSchema = z.object({
  count: z.number()
});