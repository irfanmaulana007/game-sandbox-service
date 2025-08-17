import { z } from 'zod';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema';
import { GameMapOrderByWithAggregationInputObjectSchema } from './objects/GameMapOrderByWithAggregationInput.schema';
import { GameMapScalarWhereWithAggregatesInputObjectSchema } from './objects/GameMapScalarWhereWithAggregatesInput.schema';
import { GameMapScalarFieldEnumSchema } from './enums/GameMapScalarFieldEnum.schema';
import { GameMapCountAggregateInputObjectSchema } from './objects/GameMapCountAggregateInput.schema';
import { GameMapMinAggregateInputObjectSchema } from './objects/GameMapMinAggregateInput.schema';
import { GameMapMaxAggregateInputObjectSchema } from './objects/GameMapMaxAggregateInput.schema'

export const GameMapGroupBySchema = z.object({ where: GameMapWhereInputObjectSchema.optional(), orderBy: z.union([GameMapOrderByWithAggregationInputObjectSchema, GameMapOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GameMapScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GameMapScalarFieldEnumSchema), _count: z.union([z.boolean(), GameMapCountAggregateInputObjectSchema]).optional(), _min: GameMapMinAggregateInputObjectSchema.optional(), _max: GameMapMaxAggregateInputObjectSchema.optional() })