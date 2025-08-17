import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const BattleLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.BattleLogWhereUniqueInput, Prisma.BattleLogWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const BattleLogWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
