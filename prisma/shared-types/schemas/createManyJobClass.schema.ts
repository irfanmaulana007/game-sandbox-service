import { z } from 'zod';
import { JobClassCreateManyInputObjectSchema } from './objects/JobClassCreateManyInput.schema'

export const JobClassCreateManySchema = z.object({ data: z.union([ JobClassCreateManyInputObjectSchema, z.array(JobClassCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })