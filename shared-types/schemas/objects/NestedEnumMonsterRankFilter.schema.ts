import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema'

export const NestedEnumMonsterRankFilterObjectSchema: z.ZodType<Prisma.NestedEnumMonsterRankFilter, Prisma.NestedEnumMonsterRankFilter> = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMonsterRankFilterObjectZodSchema = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankFilterObjectSchema)]).optional()
}).strict();
