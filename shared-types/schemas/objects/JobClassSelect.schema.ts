import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema } from '../findManyCharacter.schema';
import { JobClassCountOutputTypeArgsObjectSchema } from './JobClassCountOutputTypeArgs.schema'

export const JobClassSelectObjectSchema: z.ZodType<Prisma.JobClassSelect, Prisma.JobClassSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  baseHealth: z.boolean().optional(),
  baseAttack: z.boolean().optional(),
  baseDefense: z.boolean().optional(),
  baseSpeed: z.boolean().optional(),
  baseCritical: z.boolean().optional(),
  healthPerLevel: z.boolean().optional(),
  attackPerLevel: z.boolean().optional(),
  defensePerLevel: z.boolean().optional(),
  speedPerLevel: z.boolean().optional(),
  criticalPerLevel: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobClassSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  baseHealth: z.boolean().optional(),
  baseAttack: z.boolean().optional(),
  baseDefense: z.boolean().optional(),
  baseSpeed: z.boolean().optional(),
  baseCritical: z.boolean().optional(),
  healthPerLevel: z.boolean().optional(),
  attackPerLevel: z.boolean().optional(),
  defensePerLevel: z.boolean().optional(),
  speedPerLevel: z.boolean().optional(),
  criticalPerLevel: z.boolean().optional(),
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
