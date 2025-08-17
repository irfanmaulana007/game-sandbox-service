import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterDetailsWhereUniqueInputObjectSchema: z.ZodType<Prisma.MonsterDetailsWhereUniqueInput, Prisma.MonsterDetailsWhereUniqueInput> = z.object({
  id: z.number().int(),
  monsterId: z.number().int()
}).strict();
export const MonsterDetailsWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int(),
  monsterId: z.number().int()
}).strict();
