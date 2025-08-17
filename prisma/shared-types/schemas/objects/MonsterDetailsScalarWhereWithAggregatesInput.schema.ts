import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumMonsterRankWithAggregatesFilterObjectSchema } from './EnumMonsterRankWithAggregatesFilter.schema';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema'

export const MonsterDetailsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MonsterDetailsScalarWhereWithAggregatesInput, Prisma.MonsterDetailsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  monsterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rank: z.union([z.lazy(() => EnumMonsterRankWithAggregatesFilterObjectSchema), MonsterRankSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  imageUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  dropTable: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
export const MonsterDetailsScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MonsterDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  monsterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rank: z.union([z.lazy(() => EnumMonsterRankWithAggregatesFilterObjectSchema), MonsterRankSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  imageUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  dropTable: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional()
}).strict();
