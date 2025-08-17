import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { NestedEnumBattleResultFilterObjectSchema } from './NestedEnumBattleResultFilter.schema'

export const EnumBattleResultFilterObjectSchema: z.ZodType<Prisma.EnumBattleResultFilter, Prisma.EnumBattleResultFilter> = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultFilterObjectSchema)]).optional()
}).strict();
export const EnumBattleResultFilterObjectZodSchema = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultFilterObjectSchema)]).optional()
}).strict();
