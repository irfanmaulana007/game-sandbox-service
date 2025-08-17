import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedOneWithoutInventoryInputObjectSchema } from './CharacterCreateNestedOneWithoutInventoryInput.schema'

export const CharacterInventoryCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateWithoutItemInput, Prisma.CharacterInventoryCreateWithoutItemInput> = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutInventoryInputObjectSchema)
}).strict();
export const CharacterInventoryCreateWithoutItemInputObjectZodSchema = z.object({
  id: z.string().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  character: z.lazy(() => CharacterCreateNestedOneWithoutInventoryInputObjectSchema)
}).strict();
