import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedManyWithoutJobInputObjectSchema } from './CharacterCreateNestedManyWithoutJobInput.schema'

export const JobClassCreateInputObjectSchema: z.ZodType<Prisma.JobClassCreateInput, Prisma.JobClassCreateInput> = z.object({
  name: z.string(),
  description: z.string().nullish(),
  baseHealth: z.number().int(),
  baseAttack: z.number().int(),
  baseDefense: z.number().int(),
  baseSpeed: z.number().int(),
  baseCritical: z.number().int(),
  healthPerLevel: z.number().int().optional(),
  attackPerLevel: z.number().int().optional(),
  defensePerLevel: z.number().int().optional(),
  speedPerLevel: z.number().int().optional(),
  criticalPerLevel: z.number().int().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobClassCreateInputObjectZodSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  baseHealth: z.number().int(),
  baseAttack: z.number().int(),
  baseDefense: z.number().int(),
  baseSpeed: z.number().int(),
  baseCritical: z.number().int(),
  healthPerLevel: z.number().int().optional(),
  attackPerLevel: z.number().int().optional(),
  defensePerLevel: z.number().int().optional(),
  speedPerLevel: z.number().int().optional(),
  criticalPerLevel: z.number().int().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
