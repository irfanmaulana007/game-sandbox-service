import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CharacterInventoryOrderByRelationAggregateInputObjectSchema } from './CharacterInventoryOrderByRelationAggregateInput.schema'

export const ItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ItemOrderByWithRelationInput, Prisma.ItemOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effectValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  characterInventory: z.lazy(() => CharacterInventoryOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ItemOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  effectValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rarity: SortOrderSchema.optional(),
  dropRate: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  characterInventory: z.lazy(() => CharacterInventoryOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
