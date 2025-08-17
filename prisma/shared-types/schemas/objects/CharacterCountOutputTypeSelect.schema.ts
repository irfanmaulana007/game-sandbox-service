import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CharacterCountOutputTypeSelect, Prisma.CharacterCountOutputTypeSelect> = z.object({
  equipment: z.boolean().optional(),
  inventory: z.boolean().optional(),
  battleLogs: z.boolean().optional()
}).strict();
export const CharacterCountOutputTypeSelectObjectZodSchema = z.object({
  equipment: z.boolean().optional(),
  inventory: z.boolean().optional(),
  battleLogs: z.boolean().optional()
}).strict();
