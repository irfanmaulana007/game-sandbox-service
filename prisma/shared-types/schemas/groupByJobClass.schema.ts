import { z } from 'zod';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema';
import { JobClassOrderByWithAggregationInputObjectSchema } from './objects/JobClassOrderByWithAggregationInput.schema';
import { JobClassScalarWhereWithAggregatesInputObjectSchema } from './objects/JobClassScalarWhereWithAggregatesInput.schema';
import { JobClassScalarFieldEnumSchema } from './enums/JobClassScalarFieldEnum.schema';
import { JobClassCountAggregateInputObjectSchema } from './objects/JobClassCountAggregateInput.schema';
import { JobClassMinAggregateInputObjectSchema } from './objects/JobClassMinAggregateInput.schema';
import { JobClassMaxAggregateInputObjectSchema } from './objects/JobClassMaxAggregateInput.schema'

export const JobClassGroupBySchema = z.object({ where: JobClassWhereInputObjectSchema.optional(), orderBy: z.union([JobClassOrderByWithAggregationInputObjectSchema, JobClassOrderByWithAggregationInputObjectSchema.array()]).optional(), having: JobClassScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(JobClassScalarFieldEnumSchema), _count: z.union([z.boolean(), JobClassCountAggregateInputObjectSchema]).optional(), _min: JobClassMinAggregateInputObjectSchema.optional(), _max: JobClassMaxAggregateInputObjectSchema.optional() })