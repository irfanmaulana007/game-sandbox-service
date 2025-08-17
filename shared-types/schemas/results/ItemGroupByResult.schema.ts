import { z } from 'zod';
export const ItemGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  effectValue: z.number().int(),
  dropRate: z.number(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    type: z.number(),
    description: z.number(),
    effectValue: z.number(),
    rarity: z.number(),
    dropRate: z.number(),
    createdAt: z.number(),
    characterInventory: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    effectValue: z.number().nullable(),
    dropRate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    effectValue: z.number().nullable(),
    dropRate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    description: z.string().nullable(),
    effectValue: z.number().int().nullable(),
    dropRate: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    description: z.string().nullable(),
    effectValue: z.number().int().nullable(),
    dropRate: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));