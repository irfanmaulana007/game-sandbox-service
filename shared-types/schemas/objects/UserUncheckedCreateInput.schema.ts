import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput, Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
