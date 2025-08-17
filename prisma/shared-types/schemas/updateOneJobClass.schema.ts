import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassUpdateInputObjectSchema } from './objects/JobClassUpdateInput.schema';
import { JobClassUncheckedUpdateInputObjectSchema } from './objects/JobClassUncheckedUpdateInput.schema';
import { JobClassWhereUniqueInputObjectSchema } from './objects/JobClassWhereUniqueInput.schema'

export const JobClassUpdateOneSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), data: z.union([JobClassUpdateInputObjectSchema, JobClassUncheckedUpdateInputObjectSchema]), where: JobClassWhereUniqueInputObjectSchema  })