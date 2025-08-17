import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const ItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.ItemWhereUniqueInput, Prisma.ItemWhereUniqueInput> = z.object({
  id: z.number().int()
}).strict();
export const ItemWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int()
}).strict();
