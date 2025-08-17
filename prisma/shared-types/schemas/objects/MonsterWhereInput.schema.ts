import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { GameMapNullableScalarRelationFilterObjectSchema } from './GameMapNullableScalarRelationFilter.schema';
import { GameMapWhereInputObjectSchema } from './GameMapWhereInput.schema';
import { MonsterDetailsNullableScalarRelationFilterObjectSchema } from './MonsterDetailsNullableScalarRelationFilter.schema';
import { MonsterDetailsWhereInputObjectSchema } from './MonsterDetailsWhereInput.schema';
import { BattleLogListRelationFilterObjectSchema } from './BattleLogListRelationFilter.schema'

export const MonsterWhereInputObjectSchema: z.ZodType<Prisma.MonsterWhereInput, Prisma.MonsterWhereInput> = z.object({
  AND: z.union([z.lazy(() => MonsterWhereInputObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterWhereInputObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceReward: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldReward: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  mapId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  map: z.union([z.lazy(() => GameMapNullableScalarRelationFilterObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema)]).nullish(),
  details: z.union([z.lazy(() => MonsterDetailsNullableScalarRelationFilterObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).nullish(),
  battleLogs: z.lazy(() => BattleLogListRelationFilterObjectSchema).optional()
}).strict();
export const MonsterWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => MonsterWhereInputObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterWhereInputObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceReward: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldReward: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  mapId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).nullish(),
  map: z.union([z.lazy(() => GameMapNullableScalarRelationFilterObjectSchema), z.lazy(() => GameMapWhereInputObjectSchema)]).nullish(),
  details: z.union([z.lazy(() => MonsterDetailsNullableScalarRelationFilterObjectSchema), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).nullish(),
  battleLogs: z.lazy(() => BattleLogListRelationFilterObjectSchema).optional()
}).strict();
