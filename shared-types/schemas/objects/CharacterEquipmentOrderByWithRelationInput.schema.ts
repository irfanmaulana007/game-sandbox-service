import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByWithRelationInputObjectSchema } from './CharacterOrderByWithRelationInput.schema';
import { EquipmentOrderByWithRelationInputObjectSchema } from './EquipmentOrderByWithRelationInput.schema'

export const CharacterEquipmentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentOrderByWithRelationInput, Prisma.CharacterEquipmentOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  equipment: z.lazy(() => EquipmentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  equipmentId: SortOrderSchema.optional(),
  slot: SortOrderSchema.optional(),
  equippedAt: SortOrderSchema.optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  equipment: z.lazy(() => EquipmentOrderByWithRelationInputObjectSchema).optional()
}).strict();
