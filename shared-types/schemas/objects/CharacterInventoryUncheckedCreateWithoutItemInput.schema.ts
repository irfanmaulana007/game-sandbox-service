import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedCreateWithoutItemInput, Prisma.CharacterInventoryUncheckedCreateWithoutItemInput> = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryUncheckedCreateWithoutItemInputObjectZodSchema = z.object({
  id: z.string().optional(),
  characterId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
