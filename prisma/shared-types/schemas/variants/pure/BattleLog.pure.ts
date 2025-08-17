import { z } from 'zod';
import { BattleResultSchema } from '../../enums/BattleResult.schema';
// prettier-ignore
export const BattleLogModelSchema = z.object({
    id: z.string(),
    characterId: z.string(),
    monsterId: z.number().int(),
    battleResult: BattleResultSchema,
    characterHealthRemaining: z.number().int(),
    monsterHealthRemaining: z.number().int(),
    turnsTaken: z.number().int(),
    experienceGained: z.number().int(),
    goldGained: z.number().int(),
    battleDate: z.date(),
    character: z.unknown(),
    monster: z.unknown()
}).strict();

export type BattleLogModelType = z.infer<typeof BattleLogModelSchema>;
