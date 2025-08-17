import { z } from 'zod';
export const CharacterInventoryUpsertResultSchema = z.object({
  id: z.string(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  createdAt: z.date(),
  character: z.unknown(),
  item: z.unknown()
});