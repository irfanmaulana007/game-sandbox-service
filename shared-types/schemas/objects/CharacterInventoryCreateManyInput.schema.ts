import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryCreateManyInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateManyInput, Prisma.CharacterInventoryCreateManyInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
