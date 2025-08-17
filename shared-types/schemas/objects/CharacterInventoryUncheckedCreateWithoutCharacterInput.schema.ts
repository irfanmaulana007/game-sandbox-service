import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedCreateWithoutCharacterInput, Prisma.CharacterInventoryUncheckedCreateWithoutCharacterInput> = z.object({
  id: z.string().optional(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const CharacterInventoryUncheckedCreateWithoutCharacterInputObjectZodSchema = z.object({
  id: z.string().optional(),
  itemId: z.number().int(),
  quantity: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
