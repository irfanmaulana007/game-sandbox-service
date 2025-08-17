import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSelectObjectSchema } from './JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './JobClassInclude.schema'

export const JobClassArgsObjectSchema = z.object({
  select: z.lazy(() => JobClassSelectObjectSchema).optional(),
  include: z.lazy(() => JobClassIncludeObjectSchema).optional()
}).strict();
export const JobClassArgsObjectZodSchema = z.object({
  select: z.lazy(() => JobClassSelectObjectSchema).optional(),
  include: z.lazy(() => JobClassIncludeObjectSchema).optional()
}).strict();
