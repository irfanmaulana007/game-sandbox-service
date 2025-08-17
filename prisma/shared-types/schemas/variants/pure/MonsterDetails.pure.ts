import { z } from 'zod';
import { MonsterRankSchema } from '../../enums/MonsterRank.schema';
// prettier-ignore
export const MonsterDetailsModelSchema = z.object({
    id: z.number().int(),
    monsterId: z.number().int(),
    rank: MonsterRankSchema,
    description: z.string().nullable(),
    imageUrl: z.string().nullable(),
    dropTable: z.unknown().nullable(),
    createdAt: z.date(),
    monster: z.unknown()
}).strict();

export type MonsterDetailsModelType = z.infer<typeof MonsterDetailsModelSchema>;
