import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const CharacterScalarWhereInputObjectSchema: z.ZodType<Prisma.CharacterScalarWhereInput, Prisma.CharacterScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experience: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  statusPoints: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gold: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const CharacterScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experience: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  statusPoints: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gold: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
