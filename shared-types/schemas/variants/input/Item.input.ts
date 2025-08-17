import { z } from 'zod';
import { RaritySchema } from '../../enums/Rarity.schema';
// prettier-ignore
export const ItemInputSchema = z.object({
    name: z.string(),
    type: z.string(),
    description: z.string().optional().nullable(),
    effectValue: z.number().int().optional().nullable(),
    rarity: RaritySchema,
    dropRate: z.number(),
    characterInventory: z.array(z.unknown())
}).strict();

export type ItemInputType = z.infer<typeof ItemInputSchema>;
