import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { ItemArgsObjectSchema } from './ItemArgs.schema'

export const CharacterInventorySelectObjectSchema: z.ZodType<Prisma.CharacterInventorySelect, Prisma.CharacterInventorySelect> = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
export const CharacterInventorySelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  itemId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional()
}).strict();
