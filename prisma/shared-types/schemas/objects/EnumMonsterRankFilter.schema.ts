import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { NestedEnumMonsterRankFilterObjectSchema } from './NestedEnumMonsterRankFilter.schema'

export const EnumMonsterRankFilterObjectSchema: z.ZodType<Prisma.EnumMonsterRankFilter, Prisma.EnumMonsterRankFilter> = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankFilterObjectSchema)]).optional()
}).strict();
export const EnumMonsterRankFilterObjectZodSchema = z.object({
  equals: MonsterRankSchema.optional(),
  in: MonsterRankSchema.array().optional(),
  notIn: MonsterRankSchema.array().optional(),
  not: z.union([MonsterRankSchema, z.lazy(() => NestedEnumMonsterRankFilterObjectSchema)]).optional()
}).strict();
