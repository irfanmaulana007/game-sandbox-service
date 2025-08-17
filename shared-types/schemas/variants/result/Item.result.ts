import { z } from 'zod';
import { RaritySchema } from '../../enums/Rarity.schema';
// prettier-ignore
export const ItemResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    type: z.string(),
    description: z.string().nullable(),
    effectValue: z.number().int().nullable(),
    rarity: RaritySchema,
    dropRate: z.number(),
    createdAt: z.date(),
    characterInventory: z.array(z.unknown())
}).strict();

export type ItemResultType = z.infer<typeof ItemResultSchema>;
