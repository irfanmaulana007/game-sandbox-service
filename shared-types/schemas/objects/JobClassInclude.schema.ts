import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterFindManySchema } from '../findManyCharacter.schema';
import { JobClassCountOutputTypeArgsObjectSchema } from './JobClassCountOutputTypeArgs.schema'

export const JobClassIncludeObjectSchema: z.ZodType<Prisma.JobClassInclude, Prisma.JobClassInclude> = z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobClassIncludeObjectZodSchema = z.object({
  characters: z.union([z.boolean(), z.lazy(() => CharacterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
