import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput, Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const UserCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
