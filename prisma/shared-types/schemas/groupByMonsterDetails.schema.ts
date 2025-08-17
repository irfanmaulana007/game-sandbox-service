import { z } from 'zod';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema';
import { MonsterDetailsOrderByWithAggregationInputObjectSchema } from './objects/MonsterDetailsOrderByWithAggregationInput.schema';
import { MonsterDetailsScalarWhereWithAggregatesInputObjectSchema } from './objects/MonsterDetailsScalarWhereWithAggregatesInput.schema';
import { MonsterDetailsScalarFieldEnumSchema } from './enums/MonsterDetailsScalarFieldEnum.schema';
import { MonsterDetailsCountAggregateInputObjectSchema } from './objects/MonsterDetailsCountAggregateInput.schema';
import { MonsterDetailsMinAggregateInputObjectSchema } from './objects/MonsterDetailsMinAggregateInput.schema';
import { MonsterDetailsMaxAggregateInputObjectSchema } from './objects/MonsterDetailsMaxAggregateInput.schema'

export const MonsterDetailsGroupBySchema = z.object({ where: MonsterDetailsWhereInputObjectSchema.optional(), orderBy: z.union([MonsterDetailsOrderByWithAggregationInputObjectSchema, MonsterDetailsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MonsterDetailsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MonsterDetailsScalarFieldEnumSchema), _count: z.union([z.boolean(), MonsterDetailsCountAggregateInputObjectSchema]).optional(), _min: MonsterDetailsMinAggregateInputObjectSchema.optional(), _max: MonsterDetailsMaxAggregateInputObjectSchema.optional() })