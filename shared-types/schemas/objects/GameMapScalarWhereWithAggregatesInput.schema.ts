import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumMapDifficultyWithAggregatesFilterObjectSchema } from './EnumMapDifficultyWithAggregatesFilter.schema';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema'

export const GameMapScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GameMapScalarWhereWithAggregatesInput, Prisma.GameMapScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  minLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  maxLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  difficulty: z.union([z.lazy(() => EnumMapDifficultyWithAggregatesFilterObjectSchema), MapDifficultySchema]).optional(),
  backgroundImage: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
export const GameMapScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GameMapScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  minLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  maxLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  difficulty: z.union([z.lazy(() => EnumMapDifficultyWithAggregatesFilterObjectSchema), MapDifficultySchema]).optional(),
  backgroundImage: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish()
}).strict();
