import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const JobClassCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.JobClassCountOutputTypeSelect, Prisma.JobClassCountOutputTypeSelect> = z.object({
  characters: z.boolean().optional()
}).strict();
export const JobClassCountOutputTypeSelectObjectZodSchema = z.object({
  characters: z.boolean().optional()
}).strict();
