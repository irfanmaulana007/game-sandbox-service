import { z } from 'zod';
import { EquipmentSlotSchema } from '../../enums/EquipmentSlot.schema';
// prettier-ignore
export const CharacterEquipmentModelSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    equipmentId: z.number().int(),
    slot: EquipmentSlotSchema,
    equippedAt: z.date(),
    character: z.unknown(),
    equipment: z.unknown()
}).strict();

export type CharacterEquipmentModelType = z.infer<typeof CharacterEquipmentModelSchema>;
