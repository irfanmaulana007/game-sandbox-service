import { z } from 'zod';
import { MapDifficultySchema } from '../../enums/MapDifficulty.schema';
// prettier-ignore
export const GameMapInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable(),
    minLevel: z.number().int(),
    maxLevel: z.number().int(),
    difficulty: MapDifficultySchema,
    backgroundImage: z.string().optional().nullable(),
    monsters: z.array(z.unknown())
}).strict();

export type GameMapInputType = z.infer<typeof GameMapInputSchema>;
