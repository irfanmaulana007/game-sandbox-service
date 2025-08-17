import { z } from 'zod';
// prettier-ignore
export const MonsterInputSchema = z.object({
    name: z.string(),
    level: z.number().int(),
    health: z.number().int(),
    attack: z.number().int(),
    defense: z.number().int(),
    speed: z.number().int(),
    critical: z.number().int(),
    experienceReward: z.number().int(),
    goldReward: z.number().int(),
    mapId: z.number().int().optional().nullable(),
    map: z.unknown().optional().nullable(),
    details: z.unknown().optional().nullable(),
    battleLogs: z.array(z.unknown())
}).strict();

export type MonsterInputType = z.infer<typeof MonsterInputSchema>;
