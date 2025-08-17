import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema'

export const JobClassWhereInputObjectSchema: z.ZodType<Prisma.JobClassWhereInput, Prisma.JobClassWhereInput> = z.object({
  AND: z.union([z.lazy(() => JobClassWhereInputObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobClassWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobClassWhereInputObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  baseHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseAttack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseDefense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseSpeed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseCritical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  healthPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attackPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defensePerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speedPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
export const JobClassWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => JobClassWhereInputObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobClassWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobClassWhereInputObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  baseHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseAttack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseDefense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseSpeed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  baseCritical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  healthPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attackPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defensePerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speedPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalPerLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional()
}).strict();
