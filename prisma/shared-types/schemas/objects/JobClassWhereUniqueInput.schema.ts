import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const JobClassWhereUniqueInputObjectSchema: z.ZodType<Prisma.JobClassWhereUniqueInput, Prisma.JobClassWhereUniqueInput> = z.object({
  id: z.number().int(),
  name: z.string()
}).strict();
export const JobClassWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int(),
  name: z.string()
}).strict();
