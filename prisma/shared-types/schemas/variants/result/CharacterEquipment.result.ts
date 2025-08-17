import { z } from 'zod';
import { EquipmentSlotSchema } from '../../enums/EquipmentSlot.schema';
// prettier-ignore
export const CharacterEquipmentResultSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    equipmentId: z.number().int(),
    slot: EquipmentSlotSchema,
    equippedAt: z.date(),
    character: z.unknown(),
    equipment: z.unknown()
}).strict();

export type CharacterEquipmentResultType = z.infer<typeof CharacterEquipmentResultSchema>;
