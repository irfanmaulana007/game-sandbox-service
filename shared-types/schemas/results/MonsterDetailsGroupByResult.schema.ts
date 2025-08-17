import { z } from 'zod';
export const MonsterDetailsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  monsterId: z.number().int(),
  description: z.string(),
  imageUrl: z.string(),
  dropTable: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));