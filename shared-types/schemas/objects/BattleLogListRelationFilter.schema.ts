import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereInputObjectSchema } from './BattleLogWhereInput.schema'

export const BattleLogListRelationFilterObjectSchema: z.ZodType<Prisma.BattleLogListRelationFilter, Prisma.BattleLogListRelationFilter> = z.object({
  every: z.lazy(() => BattleLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => BattleLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => BattleLogWhereInputObjectSchema).optional()
}).strict();
export const BattleLogListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => BattleLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => BattleLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => BattleLogWhereInputObjectSchema).optional()
}).strict();
