import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { RaritySchema } from '../enums/Rarity.schema'

export const EquipmentCreateManyInputObjectSchema: z.ZodType<Prisma.EquipmentCreateManyInput, Prisma.EquipmentCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: EquipmentTypeSchema,
  rarity: RaritySchema,
  minLevel: z.number().int().optional(),
  healthBonus: z.number().int().optional(),
  attackBonus: z.number().int().optional(),
  defenseBonus: z.number().int().optional(),
  speedBonus: z.number().int().optional(),
  criticalBonus: z.number().int().optional(),
  description: z.string().nullish(),
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
export const EquipmentCreateManyInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: EquipmentTypeSchema,
  rarity: RaritySchema,
  minLevel: z.number().int().optional(),
  healthBonus: z.number().int().optional(),
  attackBonus: z.number().int().optional(),
  defenseBonus: z.number().int().optional(),
  speedBonus: z.number().int().optional(),
  criticalBonus: z.number().int().optional(),
  description: z.string().nullish(),
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
