import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMonsterRankFilterObjectSchema } from './NestedEnumMonsterRankFilter.schema'

export const NestedEnumMonsterRankWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumMonsterRankWithAggregatesFilter, Prisma.NestedEnumMonsterRankWithAggregatesFilter> = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMonsterRankFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMonsterRankFilterObjectSchema).optional()
}).strict();
export const NestedEnumMonsterRankWithAggregatesFilterObjectZodSchema = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMonsterRankFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMonsterRankFilterObjectSchema).optional()
}).strict();
