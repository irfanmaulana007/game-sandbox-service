import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterUserIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CharacterUserIdNameCompoundUniqueInput, Prisma.CharacterUserIdNameCompoundUniqueInput> = z.object({
  userId: z.string(),
  name: z.string()
}).strict();
export const CharacterUserIdNameCompoundUniqueInputObjectZodSchema = z.object({
  userId: z.string(),
  name: z.string()
}).strict();
