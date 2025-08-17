import { z } from 'zod';
// prettier-ignore
export const MonsterResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    level: z.number().int(),
    health: z.number().int(),
    attack: z.number().int(),
    defense: z.number().int(),
    speed: z.number().int(),
    critical: z.number().int(),
    experienceReward: z.number().int(),
    goldReward: z.number().int(),
    mapId: z.number().int().nullable(),
    createdAt: z.date(),
    map: z.unknown().nullable(),
    details: z.unknown().nullable(),
    battleLogs: z.array(z.unknown())
}).strict();

export type MonsterResultType = z.infer<typeof MonsterResultSchema>;
