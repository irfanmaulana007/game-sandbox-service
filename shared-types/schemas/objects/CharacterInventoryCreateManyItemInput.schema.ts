import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryCreateManyItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateManyItemInput, Prisma.CharacterInventoryCreateManyItemInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryCreateManyItemInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
