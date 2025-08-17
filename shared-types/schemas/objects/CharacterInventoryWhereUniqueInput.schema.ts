import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterInventoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.CharacterInventoryWhereUniqueInput, Prisma.CharacterInventoryWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const CharacterInventoryWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
