import { z } from 'zod';
import { JobClassOrderByWithRelationInputObjectSchema } from './objects/JobClassOrderByWithRelationInput.schema';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema';
import { JobClassWhereUniqueInputObjectSchema } from './objects/JobClassWhereUniqueInput.schema';
import { JobClassCountAggregateInputObjectSchema } from './objects/JobClassCountAggregateInput.schema';
import { JobClassMinAggregateInputObjectSchema } from './objects/JobClassMinAggregateInput.schema';
import { JobClassMaxAggregateInputObjectSchema } from './objects/JobClassMaxAggregateInput.schema';
import { JobClassAvgAggregateInputObjectSchema } from './objects/JobClassAvgAggregateInput.schema';
import { JobClassSumAggregateInputObjectSchema } from './objects/JobClassSumAggregateInput.schema'

export const JobClassAggregateSchema = z.object({ orderBy: z.union([JobClassOrderByWithRelationInputObjectSchema, JobClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobClassWhereInputObjectSchema.optional(), cursor: JobClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), JobClassCountAggregateInputObjectSchema ]).optional(), _min: JobClassMinAggregateInputObjectSchema.optional(), _max: JobClassMaxAggregateInputObjectSchema.optional(), _avg: JobClassAvgAggregateInputObjectSchema.optional(), _sum: JobClassSumAggregateInputObjectSchema.optional() })