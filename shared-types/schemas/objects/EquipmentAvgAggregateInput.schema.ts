import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const EquipmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.EquipmentAvgAggregateInputType, Prisma.EquipmentAvgAggregateInputType> = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  healthBonus: z.literal(true).optional(),
  attackBonus: z.literal(true).optional(),
  defenseBonus: z.literal(true).optional(),
  speedBonus: z.literal(true).optional(),
  criticalBonus: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
export const EquipmentAvgAggregateInputObjectZodSchema = z.object({
  id: z.literal(true).optional(),
  minLevel: z.literal(true).optional(),
  healthBonus: z.literal(true).optional(),
  attackBonus: z.literal(true).optional(),
  defenseBonus: z.literal(true).optional(),
  speedBonus: z.literal(true).optional(),
  criticalBonus: z.literal(true).optional(),
  dropRate: z.literal(true).optional()
}).strict();
