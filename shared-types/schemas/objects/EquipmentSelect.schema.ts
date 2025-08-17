import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentFindManySchema } from '../findManyCharacterEquipment.schema';
import { EquipmentCountOutputTypeArgsObjectSchema } from './EquipmentCountOutputTypeArgs.schema'

export const EquipmentSelectObjectSchema: z.ZodType<Prisma.EquipmentSelect, Prisma.EquipmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  rarity: z.boolean().optional(),
  minLevel: z.boolean().optional(),
  healthBonus: z.boolean().optional(),
  attackBonus: z.boolean().optional(),
  defenseBonus: z.boolean().optional(),
  speedBonus: z.boolean().optional(),
  criticalBonus: z.boolean().optional(),
  description: z.boolean().optional(),
  dropRate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  characterEquipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EquipmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EquipmentSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  rarity: z.boolean().optional(),
  minLevel: z.boolean().optional(),
  healthBonus: z.boolean().optional(),
  attackBonus: z.boolean().optional(),
  defenseBonus: z.boolean().optional(),
  speedBonus: z.boolean().optional(),
  criticalBonus: z.boolean().optional(),
  description: z.boolean().optional(),
  dropRate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  characterEquipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EquipmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
