import { z } from 'zod';
export const CharacterEquipmentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: z.unknown(),
  equippedAt: z.date(),
  character: z.unknown(),
  equipment: z.unknown()
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