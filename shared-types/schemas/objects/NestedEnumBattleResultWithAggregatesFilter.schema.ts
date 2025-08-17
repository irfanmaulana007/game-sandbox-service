import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBattleResultFilterObjectSchema } from './NestedEnumBattleResultFilter.schema'

export const NestedEnumBattleResultWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBattleResultWithAggregatesFilter, Prisma.NestedEnumBattleResultWithAggregatesFilter> = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBattleResultFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBattleResultFilterObjectSchema).optional()
}).strict();
export const NestedEnumBattleResultWithAggregatesFilterObjectZodSchema = z.object({
  equals: BattleResultSchema.optional(),
  in: BattleResultSchema.array().optional(),
  notIn: BattleResultSchema.array().optional(),
  not: z.union([BattleResultSchema, z.lazy(() => NestedEnumBattleResultWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBattleResultFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBattleResultFilterObjectSchema).optional()
}).strict();
