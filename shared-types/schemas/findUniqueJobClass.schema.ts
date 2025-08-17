import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassWhereUniqueInputObjectSchema } from './objects/JobClassWhereUniqueInput.schema'

export const JobClassFindUniqueSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), where: JobClassWhereUniqueInputObjectSchema })