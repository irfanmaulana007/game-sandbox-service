import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassWhereInputObjectSchema } from './JobClassWhereInput.schema'

export const JobClassScalarRelationFilterObjectSchema: z.ZodType<Prisma.JobClassScalarRelationFilter, Prisma.JobClassScalarRelationFilter> = z.object({
  is: z.lazy(() => JobClassWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => JobClassWhereInputObjectSchema).optional()
}).strict();
export const JobClassScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => JobClassWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => JobClassWhereInputObjectSchema).optional()
}).strict();
