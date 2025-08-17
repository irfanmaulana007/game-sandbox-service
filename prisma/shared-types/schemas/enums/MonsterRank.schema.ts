import { z } from 'zod';

export const MonsterRankSchema = z.enum(['normal', 'elite', 'boss', 'legendary'])