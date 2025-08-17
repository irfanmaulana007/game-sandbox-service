import { z } from 'zod';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema';
import { BattleLogOrderByWithAggregationInputObjectSchema } from './objects/BattleLogOrderByWithAggregationInput.schema';
import { BattleLogScalarWhereWithAggregatesInputObjectSchema } from './objects/BattleLogScalarWhereWithAggregatesInput.schema';
import { BattleLogScalarFieldEnumSchema } from './enums/BattleLogScalarFieldEnum.schema';
import { BattleLogCountAggregateInputObjectSchema } from './objects/BattleLogCountAggregateInput.schema';
import { BattleLogMinAggregateInputObjectSchema } from './objects/BattleLogMinAggregateInput.schema';
import { BattleLogMaxAggregateInputObjectSchema } from './objects/BattleLogMaxAggregateInput.schema'

export const BattleLogGroupBySchema = z.object({ where: BattleLogWhereInputObjectSchema.optional(), orderBy: z.union([BattleLogOrderByWithAggregationInputObjectSchema, BattleLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BattleLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BattleLogScalarFieldEnumSchema), _count: z.union([z.boolean(), BattleLogCountAggregateInputObjectSchema]).optional(), _min: BattleLogMinAggregateInputObjectSchema.optional(), _max: BattleLogMaxAggregateInputObjectSchema.optional() })