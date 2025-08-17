import { z } from 'zod';
export const CharacterEquipmentFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  slot: z.unknown(),
  equippedAt: z.date(),
  character: z.unknown(),
  equipment: z.unknown()
}));