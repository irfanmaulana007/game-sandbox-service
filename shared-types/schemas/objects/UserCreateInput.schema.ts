import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedManyWithoutUserInputObjectSchema } from './CharacterCreateNestedManyWithoutUserInput.schema'

export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput, Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
