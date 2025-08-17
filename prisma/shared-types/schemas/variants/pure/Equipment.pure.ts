import { z } from 'zod';
import { EquipmentTypeSchema } from '../../enums/EquipmentType.schema';
import { RaritySchema } from '../../enums/Rarity.schema';
// prettier-ignore
export const EquipmentModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    type: EquipmentTypeSchema,
    rarity: RaritySchema,
    minLevel: z.number().int(),
    healthBonus: z.number().int(),
    attackBonus: z.number().int(),
    defenseBonus: z.number().int(),
    speedBonus: z.number().int(),
    criticalBonus: z.number().int(),
    description: z.string().nullable(),
    dropRate: z.number(),
    createdAt: z.date(),
    characterEquipment: z.array(z.unknown())
}).strict();

export type EquipmentModelType = z.infer<typeof EquipmentModelSchema>;
