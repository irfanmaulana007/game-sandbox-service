import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const GameMapCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GameMapCountOutputTypeSelect, Prisma.GameMapCountOutputTypeSelect> = z.object({
  monsters: z.boolean().optional()
}).strict();
export const GameMapCountOutputTypeSelectObjectZodSchema = z.object({
  monsters: z.boolean().optional()
}).strict();
