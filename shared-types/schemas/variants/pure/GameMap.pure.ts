import { z } from 'zod';
import { MapDifficultySchema } from '../../enums/MapDifficulty.schema';
// prettier-ignore
export const GameMapModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    minLevel: z.number().int(),
    maxLevel: z.number().int(),
    difficulty: MapDifficultySchema,
    backgroundImage: z.string().nullable(),
    createdAt: z.date(),
    monsters: z.array(z.unknown())
}).strict();

export type GameMapModelType = z.infer<typeof GameMapModelSchema>;
