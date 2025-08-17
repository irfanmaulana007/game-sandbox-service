import { z } from 'zod';
export const EquipmentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.unknown(),
  rarity: z.unknown(),
  minLevel: z.number().int(),
  healthBonus: z.number().int(),
  attackBonus: z.number().int(),
  defenseBonus: z.number().int(),
  speedBonus: z.number().int(),
  criticalBonus: z.number().int(),
  description: z.string().optional(),
  dropRate: z.number(),
  createdAt: z.date(),
  characterEquipment: z.array(z.unknown())
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