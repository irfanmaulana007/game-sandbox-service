import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedOneWithoutInventoryInputObjectSchema } from './CharacterCreateNestedOneWithoutInventoryInput.schema';
import { ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema } from './ItemCreateNestedOneWithoutCharacterInventoryInput.schema'

export const CharacterInventoryCreateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateInput, Prisma.CharacterInventoryCreateInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutInventoryInputObjectSchema),
  item: z.lazy(() => ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema)
}).strict();
export const CharacterInventoryCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutInventoryInputObjectSchema),
  item: z.lazy(() => ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema)
}).strict();
