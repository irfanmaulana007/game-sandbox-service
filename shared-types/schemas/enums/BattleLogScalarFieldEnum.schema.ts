import { z } from 'zod';

export const BattleLogScalarFieldEnumSchema = z.enum(['id', 'characterId', 'monsterId', 'battleResult', 'characterHealthRemaining', 'monsterHealthRemaining', 'turnsTaken', 'experienceGained', 'goldGained', 'battleDate'])