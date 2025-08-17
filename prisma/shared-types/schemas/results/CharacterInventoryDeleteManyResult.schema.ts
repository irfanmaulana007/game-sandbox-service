import { z } from 'zod';
export const CharacterInventoryDeleteManyResultSchema = z.object({
  count: z.number()
});