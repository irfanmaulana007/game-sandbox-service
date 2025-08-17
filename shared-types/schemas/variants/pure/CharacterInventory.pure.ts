import { z } from 'zod';
// prettier-ignore
export const CharacterInventoryModelSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    itemId: z.number().int(),
    quantity: z.number().int(),
    createdAt: z.date(),
    character: z.unknown(),
    item: z.unknown()
}).strict();

export type CharacterInventoryModelType = z.infer<typeof CharacterInventoryModelSchema>;
