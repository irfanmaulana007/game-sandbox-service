import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedCreateInput, Prisma.CharacterInventoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
