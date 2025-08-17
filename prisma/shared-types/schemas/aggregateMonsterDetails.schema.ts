import { z } from 'zod';
import { MonsterDetailsOrderByWithRelationInputObjectSchema } from './objects/MonsterDetailsOrderByWithRelationInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './objects/MonsterDetailsWhereUniqueInput.schema';
import { MonsterDetailsCountAggregateInputObjectSchema } from './objects/MonsterDetailsCountAggregateInput.schema';
import { MonsterDetailsMinAggregateInputObjectSchema } from './objects/MonsterDetailsMinAggregateInput.schema';
import { MonsterDetailsMaxAggregateInputObjectSchema } from './objects/MonsterDetailsMaxAggregateInput.schema';
import { MonsterDetailsAvgAggregateInputObjectSchema } from './objects/MonsterDetailsAvgAggregateInput.schema';
import { MonsterDetailsSumAggregateInputObjectSchema } from './objects/MonsterDetailsSumAggregateInput.schema'

export const MonsterDetailsAggregateSchema = z.object({ orderBy: z.union([MonsterDetailsOrderByWithRelationInputObjectSchema, MonsterDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterDetailsWhereInputObjectSchema.optional(), cursor: MonsterDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MonsterDetailsCountAggregateInputObjectSchema ]).optional(), _min: MonsterDetailsMinAggregateInputObjectSchema.optional(), _max: MonsterDetailsMaxAggregateInputObjectSchema.optional(), _avg: MonsterDetailsAvgAggregateInputObjectSchema.optional(), _sum: MonsterDetailsSumAggregateInputObjectSchema.optional() })