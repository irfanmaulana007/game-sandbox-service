import { z } from 'zod';
export const CharacterInventoryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  createdAt: z.date(),
  character: z.unknown(),
  item: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});