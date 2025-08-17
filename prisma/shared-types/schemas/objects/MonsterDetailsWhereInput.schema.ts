import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumMonsterRankFilterObjectSchema } from './EnumMonsterRankFilter.schema';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { MonsterScalarRelationFilterObjectSchema } from './MonsterScalarRelationFilter.schema';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const MonsterDetailsWhereInputObjectSchema: z.ZodType<Prisma.MonsterDetailsWhereInput, Prisma.MonsterDetailsWhereInput> = z.object({
  AND: z.union([z.lazy(() => MonsterDetailsWhereInputObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterDetailsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterDetailsWhereInputObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema).array()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rank: z.union([z.lazy(() => EnumMonsterRankFilterObjectSchema), MonsterRankSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  imageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  dropTable: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  monster: z.union([z.lazy(() => MonsterScalarRelationFilterObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema)]).optional()
}).strict();
export const MonsterDetailsWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => MonsterDetailsWhereInputObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterDetailsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterDetailsWhereInputObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema).array()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rank: z.union([z.lazy(() => EnumMonsterRankFilterObjectSchema), MonsterRankSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  imageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  dropTable: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  monster: z.union([z.lazy(() => MonsterScalarRelationFilterObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema)]).optional()
}).strict();
