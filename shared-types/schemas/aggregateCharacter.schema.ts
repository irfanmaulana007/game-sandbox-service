import { z } from 'zod';
import { CharacterOrderByWithRelationInputObjectSchema } from './objects/CharacterOrderByWithRelationInput.schema';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterCountAggregateInputObjectSchema } from './objects/CharacterCountAggregateInput.schema';
import { CharacterMinAggregateInputObjectSchema } from './objects/CharacterMinAggregateInput.schema';
import { CharacterMaxAggregateInputObjectSchema } from './objects/CharacterMaxAggregateInput.schema';
import { CharacterAvgAggregateInputObjectSchema } from './objects/CharacterAvgAggregateInput.schema';
import { CharacterSumAggregateInputObjectSchema } from './objects/CharacterSumAggregateInput.schema'

export const CharacterAggregateSchema = z.object({ orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CharacterCountAggregateInputObjectSchema ]).optional(), _min: CharacterMinAggregateInputObjectSchema.optional(), _max: CharacterMaxAggregateInputObjectSchema.optional(), _avg: CharacterAvgAggregateInputObjectSchema.optional(), _sum: CharacterSumAggregateInputObjectSchema.optional() })