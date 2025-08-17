import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUncheckedCreateNestedManyWithoutJobInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutJobInput.schema'

export const JobClassUncheckedCreateInputObjectSchema: z.ZodType<Prisma.JobClassUncheckedCreateInput, Prisma.JobClassUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
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
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobClassUncheckedCreateInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
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
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
