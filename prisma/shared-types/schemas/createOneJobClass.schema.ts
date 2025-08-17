import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassCreateInputObjectSchema } from './objects/JobClassCreateInput.schema';
import { JobClassUncheckedCreateInputObjectSchema } from './objects/JobClassUncheckedCreateInput.schema'

export const JobClassCreateOneSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), data: z.union([JobClassCreateInputObjectSchema, JobClassUncheckedCreateInputObjectSchema])  })