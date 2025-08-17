import { z } from 'zod';
export const MonsterDetailsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    monsterId: z.number(),
    rank: z.number(),
    description: z.number(),
    imageUrl: z.number(),
    dropTable: z.number(),
    createdAt: z.number(),
    monster: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    monsterId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    monsterId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    monsterId: z.number().int().nullable(),
    description: z.string().nullable(),
    imageUrl: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    monsterId: z.number().int().nullable(),
    description: z.string().nullable(),
    imageUrl: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});