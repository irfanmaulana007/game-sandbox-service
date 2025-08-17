import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassCountOutputTypeSelectObjectSchema } from './JobClassCountOutputTypeSelect.schema'

export const JobClassCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => JobClassCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const JobClassCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => JobClassCountOutputTypeSelectObjectSchema).optional()
}).strict();
