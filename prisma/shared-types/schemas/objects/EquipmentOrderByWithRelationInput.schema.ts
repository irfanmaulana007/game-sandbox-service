import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterEquipmentOrderByRelationAggregateInputObjectSchema } from './CharacterEquipmentOrderByRelationAggregateInput.schema'

export const EquipmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EquipmentOrderByWithRelationInput, Prisma.EquipmentOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EquipmentOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  rarity: SortOrderSchema.optional(),
  minLevel: SortOrderSchema.optional(),
  healthBonus: SortOrderSchema.optional(),
  attackBonus: SortOrderSchema.optional(),
  defenseBonus: SortOrderSchema.optional(),
  speedBonus: SortOrderSchema.optional(),
  criticalBonus: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
