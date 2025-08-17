import { z } from 'zod';
import { GameMapOrderByWithRelationInputObjectSchema } from './objects/GameMapOrderByWithRelationInput.schema';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema';
import { GameMapWhereUniqueInputObjectSchema } from './objects/GameMapWhereUniqueInput.schema';
import { GameMapCountAggregateInputObjectSchema } from './objects/GameMapCountAggregateInput.schema';
import { GameMapMinAggregateInputObjectSchema } from './objects/GameMapMinAggregateInput.schema';
import { GameMapMaxAggregateInputObjectSchema } from './objects/GameMapMaxAggregateInput.schema';
import { GameMapAvgAggregateInputObjectSchema } from './objects/GameMapAvgAggregateInput.schema';
import { GameMapSumAggregateInputObjectSchema } from './objects/GameMapSumAggregateInput.schema'

export const GameMapAggregateSchema = z.object({ orderBy: z.union([GameMapOrderByWithRelationInputObjectSchema, GameMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameMapWhereInputObjectSchema.optional(), cursor: GameMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GameMapCountAggregateInputObjectSchema ]).optional(), _min: GameMapMinAggregateInputObjectSchema.optional(), _max: GameMapMaxAggregateInputObjectSchema.optional(), _avg: GameMapAvgAggregateInputObjectSchema.optional(), _sum: GameMapSumAggregateInputObjectSchema.optional() })