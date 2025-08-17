import { z } from 'zod';

export const BattleResultSchema = z.enum(['victory', 'defeat'])