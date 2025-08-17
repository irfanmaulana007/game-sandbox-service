import { z } from 'zod';
export const CharacterEquipmentUpsertResultSchema = z.object({
  id: z.string(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: z.unknown(),
  equippedAt: z.date(),
  character: z.unknown(),
  equipment: z.unknown()
});