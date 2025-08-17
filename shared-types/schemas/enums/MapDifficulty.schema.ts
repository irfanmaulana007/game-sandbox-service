import { z } from 'zod';

export const MapDifficultySchema = z.enum(['easy', 'normal', 'hard', 'extreme'])