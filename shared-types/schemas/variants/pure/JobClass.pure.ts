import { z } from 'zod';
// prettier-ignore
export const JobClassModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    baseHealth: z.number().int(),
    baseAttack: z.number().int(),
    baseDefense: z.number().int(),
    baseSpeed: z.number().int(),
    baseCritical: z.number().int(),
    healthPerLevel: z.number().int(),
    attackPerLevel: z.number().int(),
    defensePerLevel: z.number().int(),
    speedPerLevel: z.number().int(),
    criticalPerLevel: z.number().int(),
    characters: z.array(z.unknown())
}).strict();

export type JobClassModelType = z.infer<typeof JobClassModelSchema>;
