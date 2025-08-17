import { z } from 'zod';
// prettier-ignore
export const CharacterInputSchema = z.object({
    userId: z.string(),
    name: z.string(),
    jobId: z.number().int(),
    level: z.number().int(),
    experience: z.number().int(),
    health: z.number().int(),
    maxHealth: z.number().int(),
    attack: z.number().int(),
    defense: z.number().int(),
    speed: z.number().int(),
    critical: z.number().int(),
    statusPoints: z.number().int(),
    gold: z.number().int(),
    user: z.unknown(),
    job: z.unknown(),
    equipment: z.array(z.unknown()),
    inventory: z.array(z.unknown()),
    battleLogs: z.array(z.unknown())
}).strict();

export type CharacterInputType = z.infer<typeof CharacterInputSchema>;
