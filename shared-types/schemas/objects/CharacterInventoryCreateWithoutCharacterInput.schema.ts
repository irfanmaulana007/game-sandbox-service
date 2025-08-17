import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema } from './ItemCreateNestedOneWithoutCharacterInventoryInput.schema'

export const CharacterInventoryCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateWithoutCharacterInput, Prisma.CharacterInventoryCreateWithoutCharacterInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema)
}).strict();
export const CharacterInventoryCreateWithoutCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  item: z.lazy(() => ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema)
}).strict();
