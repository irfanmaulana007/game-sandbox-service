import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacterOrderByWithRelationInputObjectSchema } from './CharacterOrderByWithRelationInput.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './ItemOrderByWithRelationInput.schema'

export const CharacterInventoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CharacterInventoryOrderByWithRelationInput, Prisma.CharacterInventoryOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CharacterInventoryOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  characterId: SortOrderSchema.optional(),
  itemId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  character: z.lazy(() => CharacterOrderByWithRelationInputObjectSchema).optional(),
  item: z.lazy(() => ItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
