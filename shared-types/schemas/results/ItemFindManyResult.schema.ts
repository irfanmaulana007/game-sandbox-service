import { z } from 'zod';
export const ItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
  effectValue: z.number().int().optional(),
  rarity: z.unknown(),
  dropRate: z.number(),
  createdAt: z.date(),
  characterInventory: z.array(z.unknown())
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