import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumMapDifficultyFilterObjectSchema } from './EnumMapDifficultyFilter.schema';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { MonsterListRelationFilterObjectSchema } from './MonsterListRelationFilter.schema'

export const GameMapWhereInputObjectSchema: z.ZodType<Prisma.GameMapWhereInput, Prisma.GameMapWhereInput> = z.object({
  AND: z.union([z.lazy(() => GameMapWhereInputObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameMapWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameMapWhereInputObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  minLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  difficulty: z.union([z.lazy(() => EnumMapDifficultyFilterObjectSchema), MapDifficultySchema]).optional(),
  backgroundImage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  monsters: z.lazy(() => MonsterListRelationFilterObjectSchema).optional()
}).strict();
export const GameMapWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => GameMapWhereInputObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameMapWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameMapWhereInputObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  minLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  difficulty: z.union([z.lazy(() => EnumMapDifficultyFilterObjectSchema), MapDifficultySchema]).optional(),
  backgroundImage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  monsters: z.lazy(() => MonsterListRelationFilterObjectSchema).optional()
}).strict();
