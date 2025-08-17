import { z } from 'zod';
export const GameMapGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  minLevel: z.number().int(),
  maxLevel: z.number().int(),
  backgroundImage: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    minLevel: z.number(),
    maxLevel: z.number(),
    difficulty: z.number(),
    backgroundImage: z.number(),
    createdAt: z.number(),
    monsters: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    minLevel: z.number().nullable(),
    maxLevel: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    minLevel: z.number().nullable(),
    maxLevel: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    minLevel: z.number().int().nullable(),
    maxLevel: z.number().int().nullable(),
    backgroundImage: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    minLevel: z.number().int().nullable(),
    maxLevel: z.number().int().nullable(),
    backgroundImage: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));