import { z } from 'zod';
export const BattleLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    characterId: z.number(),
    monsterId: z.number(),
    battleResult: z.number(),
    characterHealthRemaining: z.number(),
    monsterHealthRemaining: z.number(),
    turnsTaken: z.number(),
    experienceGained: z.number(),
    goldGained: z.number(),
    battleDate: z.number(),
    character: z.number(),
    monster: z.number()
  }).optional(),
  _sum: z.object({
    monsterId: z.number().nullable(),
    characterHealthRemaining: z.number().nullable(),
    monsterHealthRemaining: z.number().nullable(),
    turnsTaken: z.number().nullable(),
    experienceGained: z.number().nullable(),
    goldGained: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    monsterId: z.number().nullable(),
    characterHealthRemaining: z.number().nullable(),
    monsterHealthRemaining: z.number().nullable(),
    turnsTaken: z.number().nullable(),
    experienceGained: z.number().nullable(),
    goldGained: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    monsterId: z.number().int().nullable(),
    characterHealthRemaining: z.number().int().nullable(),
    monsterHealthRemaining: z.number().int().nullable(),
    turnsTaken: z.number().int().nullable(),
    experienceGained: z.number().int().nullable(),
    goldGained: z.number().int().nullable(),
    battleDate: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    monsterId: z.number().int().nullable(),
    characterHealthRemaining: z.number().int().nullable(),
    monsterHealthRemaining: z.number().int().nullable(),
    turnsTaken: z.number().int().nullable(),
    experienceGained: z.number().int().nullable(),
    goldGained: z.number().int().nullable(),
    battleDate: z.date().nullable()
  }).nullable().optional()});