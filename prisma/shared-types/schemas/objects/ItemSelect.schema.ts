import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryFindManySchema } from '../findManyCharacterInventory.schema';
import { ItemCountOutputTypeArgsObjectSchema } from './ItemCountOutputTypeArgs.schema'

export const ItemSelectObjectSchema: z.ZodType<Prisma.ItemSelect, Prisma.ItemSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  effectValue: z.boolean().optional(),
  rarity: z.boolean().optional(),
  dropRate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  characterInventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ItemSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  effectValue: z.boolean().optional(),
  rarity: z.boolean().optional(),
  dropRate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  characterInventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
