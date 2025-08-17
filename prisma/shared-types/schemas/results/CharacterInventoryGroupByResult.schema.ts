import { z } from 'zod';
export const CharacterInventoryGroupByResultSchema = z.array(z.object({
  id: z.string(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    characterId: z.number(),
    itemId: z.number(),
    quantity: z.number(),
    createdAt: z.number(),
    character: z.number(),
    item: z.number()
  }).optional(),
  _sum: z.object({
    itemId: z.number().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    itemId: z.number().nullable(),
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    itemId: z.number().int().nullable(),
    quantity: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));