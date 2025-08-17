import { z } from 'zod';
import { JobClassUpdateManyMutationInputObjectSchema } from './objects/JobClassUpdateManyMutationInput.schema';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema'

export const JobClassUpdateManySchema = z.object({ data: JobClassUpdateManyMutationInputObjectSchema, where: JobClassWhereInputObjectSchema.optional()  })