import { z } from 'zod';
import { JobClassSelectObjectSchema } from './objects/JobClassSelect.schema';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassWhereUniqueInputObjectSchema } from './objects/JobClassWhereUniqueInput.schema';
import { JobClassCreateInputObjectSchema } from './objects/JobClassCreateInput.schema';
import { JobClassUncheckedCreateInputObjectSchema } from './objects/JobClassUncheckedCreateInput.schema';
import { JobClassUpdateInputObjectSchema } from './objects/JobClassUpdateInput.schema';
import { JobClassUncheckedUpdateInputObjectSchema } from './objects/JobClassUncheckedUpdateInput.schema'

export const JobClassUpsertSchema = z.object({ select: JobClassSelectObjectSchema.optional(), include: JobClassIncludeObjectSchema.optional(), where: JobClassWhereUniqueInputObjectSchema, create: z.union([ JobClassCreateInputObjectSchema, JobClassUncheckedCreateInputObjectSchema ]), update: z.union([ JobClassUpdateInputObjectSchema, JobClassUncheckedUpdateInputObjectSchema ])  })