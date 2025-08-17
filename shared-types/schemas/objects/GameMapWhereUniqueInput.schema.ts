import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapWhereUniqueInputObjectSchema: z.ZodType<Prisma.GameMapWhereUniqueInput, Prisma.GameMapWhereUniqueInput> = z.object({
  id: z.number().int()
}).strict();
export const GameMapWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int()
}).strict();
