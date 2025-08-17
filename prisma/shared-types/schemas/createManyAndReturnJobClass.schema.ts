import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassCreateManyInputObjectSchema } from './objects/JobClassCreateManyInput.schema'

export const JobClassCreateManyAndReturnSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), data: z.union([ JobClassCreateManyInputObjectSchema, z.array(JobClassCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })