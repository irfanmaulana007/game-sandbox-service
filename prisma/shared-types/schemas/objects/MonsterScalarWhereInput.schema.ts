import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const MonsterScalarWhereInputObjectSchema: z.ZodType<Prisma.MonsterScalarWhereInput, Prisma.MonsterScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
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
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const MonsterScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MonsterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
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
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
