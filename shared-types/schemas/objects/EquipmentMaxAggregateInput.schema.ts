import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const EquipmentMaxAggregateInputObjectSchema: z.ZodType<Prisma.EquipmentMaxAggregateInputType, Prisma.EquipmentMaxAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  rarity: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  healthBonus: z.literal(true).optional(),
  attackBonus: z.literal(true).optional(),
  defenseBonus: z.literal(true).optional(),
  speedBonus: z.literal(true).optional(),
  criticalBonus: z.literal(true).optional(),
  description: z.literal(true).optional(),
  dropRate: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const EquipmentMaxAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  rarity: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  healthBonus: z.literal(true).optional(),
  attackBonus: z.literal(true).optional(),
  defenseBonus: z.literal(true).optional(),
  speedBonus: z.literal(true).optional(),
  criticalBonus: z.literal(true).optional(),
  description: z.literal(true).optional(),
  dropRate: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
