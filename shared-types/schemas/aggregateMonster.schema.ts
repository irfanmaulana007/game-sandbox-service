import { z } from 'zod';
import { MonsterOrderByWithRelationInputObjectSchema } from './objects/MonsterOrderByWithRelationInput.schema';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './objects/MonsterWhereUniqueInput.schema';
import { MonsterCountAggregateInputObjectSchema } from './objects/MonsterCountAggregateInput.schema';
import { MonsterMinAggregateInputObjectSchema } from './objects/MonsterMinAggregateInput.schema';
import { MonsterMaxAggregateInputObjectSchema } from './objects/MonsterMaxAggregateInput.schema';
import { MonsterAvgAggregateInputObjectSchema } from './objects/MonsterAvgAggregateInput.schema';
import { MonsterSumAggregateInputObjectSchema } from './objects/MonsterSumAggregateInput.schema'

export const MonsterAggregateSchema = z.object({ orderBy: z.union([MonsterOrderByWithRelationInputObjectSchema, MonsterOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterWhereInputObjectSchema.optional(), cursor: MonsterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MonsterCountAggregateInputObjectSchema ]).optional(), _min: MonsterMinAggregateInputObjectSchema.optional(), _max: MonsterMaxAggregateInputObjectSchema.optional(), _avg: MonsterAvgAggregateInputObjectSchema.optional(), _sum: MonsterSumAggregateInputObjectSchema.optional() })