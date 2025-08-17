import { z } from 'zod';
export const CharacterInventoryFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  createdAt: z.date(),
  character: z.unknown(),
  item: z.unknown()
}));