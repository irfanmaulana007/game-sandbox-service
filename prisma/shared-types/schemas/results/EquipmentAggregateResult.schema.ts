import { z } from 'zod';
export const EquipmentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    type: z.number(),
    rarity: z.number(),
    minLevel: z.number(),
    healthBonus: z.number(),
    attackBonus: z.number(),
    defenseBonus: z.number(),
    speedBonus: z.number(),
    criticalBonus: z.number(),
    description: z.number(),
    dropRate: z.number(),
    createdAt: z.number(),
    characterEquipment: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    minLevel: z.number().nullable(),
    healthBonus: z.number().nullable(),
    attackBonus: z.number().nullable(),
    defenseBonus: z.number().nullable(),
    speedBonus: z.number().nullable(),
    criticalBonus: z.number().nullable(),
    dropRate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    minLevel: z.number().nullable(),
    healthBonus: z.number().nullable(),
    attackBonus: z.number().nullable(),
    defenseBonus: z.number().nullable(),
    speedBonus: z.number().nullable(),
    criticalBonus: z.number().nullable(),
    dropRate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    minLevel: z.number().int().nullable(),
    healthBonus: z.number().int().nullable(),
    attackBonus: z.number().int().nullable(),
    defenseBonus: z.number().int().nullable(),
    speedBonus: z.number().int().nullable(),
    criticalBonus: z.number().int().nullable(),
    description: z.string().nullable(),
    dropRate: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    minLevel: z.number().int().nullable(),
    healthBonus: z.number().int().nullable(),
    attackBonus: z.number().int().nullable(),
    defenseBonus: z.number().int().nullable(),
    speedBonus: z.number().int().nullable(),
    criticalBonus: z.number().int().nullable(),
    description: z.string().nullable(),
    dropRate: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});