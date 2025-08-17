import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryFindManySchema } from '../findManyCharacterInventory.schema';
import { ItemCountOutputTypeArgsObjectSchema } from './ItemCountOutputTypeArgs.schema'

export const ItemIncludeObjectSchema: z.ZodType<Prisma.ItemInclude, Prisma.ItemInclude> = z.object({
  characterInventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ItemIncludeObjectZodSchema = z.object({
  characterInventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
