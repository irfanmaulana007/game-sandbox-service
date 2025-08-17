import { z } from 'zod';
export const ItemFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
  effectValue: z.number().int().optional(),
  rarity: z.unknown(),
  dropRate: z.number(),
  createdAt: z.date(),
  characterInventory: z.array(z.unknown())
}));