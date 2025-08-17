import { z } from 'zod';
import { BattleLogOrderByWithRelationInputObjectSchema } from './objects/BattleLogOrderByWithRelationInput.schema';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './objects/BattleLogWhereUniqueInput.schema';
import { BattleLogCountAggregateInputObjectSchema } from './objects/BattleLogCountAggregateInput.schema';
import { BattleLogMinAggregateInputObjectSchema } from './objects/BattleLogMinAggregateInput.schema';
import { BattleLogMaxAggregateInputObjectSchema } from './objects/BattleLogMaxAggregateInput.schema';
import { BattleLogAvgAggregateInputObjectSchema } from './objects/BattleLogAvgAggregateInput.schema';
import { BattleLogSumAggregateInputObjectSchema } from './objects/BattleLogSumAggregateInput.schema'

export const BattleLogAggregateSchema = z.object({ orderBy: z.union([BattleLogOrderByWithRelationInputObjectSchema, BattleLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BattleLogWhereInputObjectSchema.optional(), cursor: BattleLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BattleLogCountAggregateInputObjectSchema ]).optional(), _min: BattleLogMinAggregateInputObjectSchema.optional(), _max: BattleLogMaxAggregateInputObjectSchema.optional(), _avg: BattleLogAvgAggregateInputObjectSchema.optional(), _sum: BattleLogSumAggregateInputObjectSchema.optional() })