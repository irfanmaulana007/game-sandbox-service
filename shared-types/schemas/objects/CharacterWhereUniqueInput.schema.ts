import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUserIdNameCompoundUniqueInputObjectSchema } from './CharacterUserIdNameCompoundUniqueInput.schema'

export const CharacterWhereUniqueInputObjectSchema: z.ZodType<Prisma.CharacterWhereUniqueInput, Prisma.CharacterWhereUniqueInput> = z.object({
  id: z.string(),
  userId_name: z.lazy(() => CharacterUserIdNameCompoundUniqueInputObjectSchema)
}).strict();
export const CharacterWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  userId_name: z.lazy(() => CharacterUserIdNameCompoundUniqueInputObjectSchema)
}).strict();
