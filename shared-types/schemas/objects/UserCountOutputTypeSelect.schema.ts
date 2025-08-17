import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect, Prisma.UserCountOutputTypeSelect> = z.object({
  characters: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectZodSchema = z.object({
  characters: z.boolean().optional()
}).strict();
