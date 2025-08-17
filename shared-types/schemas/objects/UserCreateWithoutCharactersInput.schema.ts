import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutCharactersInput, Prisma.UserCreateWithoutCharactersInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const UserCreateWithoutCharactersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
