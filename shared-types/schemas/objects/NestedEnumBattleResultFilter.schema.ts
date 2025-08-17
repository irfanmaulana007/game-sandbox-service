import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const NestedEnumBattleResultFilterObjectSchema: z.ZodType<Prisma.NestedEnumBattleResultFilter, Prisma.NestedEnumBattleResultFilter> = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBattleResultFilterObjectZodSchema = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultFilterObjectSchema)]).optional()
}).strict();
