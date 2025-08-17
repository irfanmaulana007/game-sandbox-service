import { z } from 'zod';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema';
import { MonsterOrderByWithAggregationInputObjectSchema } from './objects/MonsterOrderByWithAggregationInput.schema';
import { MonsterScalarWhereWithAggregatesInputObjectSchema } from './objects/MonsterScalarWhereWithAggregatesInput.schema';
import { MonsterScalarFieldEnumSchema } from './enums/MonsterScalarFieldEnum.schema';
import { MonsterCountAggregateInputObjectSchema } from './objects/MonsterCountAggregateInput.schema';
import { MonsterMinAggregateInputObjectSchema } from './objects/MonsterMinAggregateInput.schema';
import { MonsterMaxAggregateInputObjectSchema } from './objects/MonsterMaxAggregateInput.schema'

export const MonsterGroupBySchema = z.object({ where: MonsterWhereInputObjectSchema.optional(), orderBy: z.union([MonsterOrderByWithAggregationInputObjectSchema, MonsterOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MonsterScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MonsterScalarFieldEnumSchema), _count: z.union([z.boolean(), MonsterCountAggregateInputObjectSchema]).optional(), _min: MonsterMinAggregateInputObjectSchema.optional(), _max: MonsterMaxAggregateInputObjectSchema.optional() })