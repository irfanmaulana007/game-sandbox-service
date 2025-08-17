import { z } from 'zod';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema'

export const JobClassDeleteManySchema = z.object({ where: JobClassWhereInputObjectSchema.optional()  })