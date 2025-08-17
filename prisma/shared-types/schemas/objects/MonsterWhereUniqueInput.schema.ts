import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterWhereUniqueInputObjectSchema: z.ZodType<Prisma.MonsterWhereUniqueInput, Prisma.MonsterWhereUniqueInput> = z.object({
  id: z.number().int()
}).strict();
export const MonsterWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int()
}).strict();
