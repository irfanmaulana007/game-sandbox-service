import { z } from 'zod';
import { MonsterRankSchema } from '../../enums/MonsterRank.schema';
// prettier-ignore
export const MonsterDetailsInputSchema = z.object({
    monsterId: z.number().int(),
    rank: MonsterRankSchema,
    description: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    dropTable: z.unknown().optional().nullable(),
    monster: z.unknown()
}).strict();

export type MonsterDetailsInputType = z.infer<typeof MonsterDetailsInputSchema>;
