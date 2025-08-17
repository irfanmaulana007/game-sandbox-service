import { z } from 'zod';
// prettier-ignore
export const CharacterInventoryInputSchema = z.object({
    characterId: z.string(),
    itemId: z.number().int(),
    quantity: z.number().int(),
    character: z.unknown(),
    item: z.unknown()
}).strict();

export type CharacterInventoryInputType = z.infer<typeof CharacterInventoryInputSchema>;
