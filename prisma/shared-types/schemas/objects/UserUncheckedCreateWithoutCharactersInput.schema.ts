import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserUncheckedCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCharactersInput, Prisma.UserUncheckedCreateWithoutCharactersInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const UserUncheckedCreateWithoutCharactersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
