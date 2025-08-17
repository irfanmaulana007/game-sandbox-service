import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterArgsObjectSchema } from './MonsterArgs.schema'

export const MonsterDetailsSelectObjectSchema: z.ZodType<Prisma.MonsterDetailsSelect, Prisma.MonsterDetailsSelect> = z.object({
  id: z.boolean().optional(),
  monsterId: z.boolean().optional(),
  rank: z.boolean().optional(),
  description: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  dropTable: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
export const MonsterDetailsSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  monsterId: z.boolean().optional(),
  rank: z.boolean().optional(),
  description: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  dropTable: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  monster: z.union([z.boolean(), z.lazy(() => MonsterArgsObjectSchema)]).optional()
}).strict();
