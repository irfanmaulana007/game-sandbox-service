import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassUpdateManyMutationInputObjectSchema } from './objects/JobClassUpdateManyMutationInput.schema';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema'

export const JobClassUpdateManyAndReturnSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), data: JobClassUpdateManyMutationInputObjectSchema, where: JobClassWhereInputObjectSchema.optional()  })