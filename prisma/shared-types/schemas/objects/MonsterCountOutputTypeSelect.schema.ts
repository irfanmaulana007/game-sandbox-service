import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MonsterCountOutputTypeSelect, Prisma.MonsterCountOutputTypeSelect> = z.object({
  battleLogs: z.boolean().optional()
}).strict();
export const MonsterCountOutputTypeSelectObjectZodSchema = z.object({
  battleLogs: z.boolean().optional()
}).strict();
