import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { CharacterEquipmentCreateNestedManyWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateNestedManyWithoutEquipmentInput.schema'

export const EquipmentCreateInputObjectSchema: z.ZodType<Prisma.EquipmentCreateInput, Prisma.EquipmentCreateInput> = z.object({
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
  createdAt: z.date().optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentCreateNestedManyWithoutEquipmentInputObjectSchema).optional()
}).strict();
export const EquipmentCreateInputObjectZodSchema = z.object({
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
  createdAt: z.date().optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentCreateNestedManyWithoutEquipmentInputObjectSchema).optional()
}).strict();
