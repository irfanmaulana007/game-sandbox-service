import { z } from 'zod';
export const CharacterEquipmentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  characterId: z.string(),
  equipmentId: z.number().int(),
  equippedAt: z.date(),
  _count: z.object({
    id: z.number(),
    characterId: z.number(),
    equipmentId: z.number(),
    slot: z.number(),
    equippedAt: z.number(),
    character: z.number(),
    equipment: z.number()
  }).optional(),
  _sum: z.object({
    equipmentId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    equipmentId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    equipmentId: z.number().int().nullable(),
    equippedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    characterId: z.string().nullable(),
    equipmentId: z.number().int().nullable(),
    equippedAt: z.date().nullable()
  }).nullable().optional()
}));