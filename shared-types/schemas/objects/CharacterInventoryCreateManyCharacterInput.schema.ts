import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryCreateManyCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateManyCharacterInput, Prisma.CharacterInventoryCreateManyCharacterInput> = z.object({
  id: z.string().optional(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryCreateManyCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
