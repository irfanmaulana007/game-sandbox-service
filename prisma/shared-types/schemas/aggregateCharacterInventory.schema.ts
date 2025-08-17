import { z } from 'zod';
import { CharacterInventoryOrderByWithRelationInputObjectSchema } from './objects/CharacterInventoryOrderByWithRelationInput.schema';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './objects/CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryCountAggregateInputObjectSchema } from './objects/CharacterInventoryCountAggregateInput.schema';
import { CharacterInventoryMinAggregateInputObjectSchema } from './objects/CharacterInventoryMinAggregateInput.schema';
import { CharacterInventoryMaxAggregateInputObjectSchema } from './objects/CharacterInventoryMaxAggregateInput.schema';
import { CharacterInventoryAvgAggregateInputObjectSchema } from './objects/CharacterInventoryAvgAggregateInput.schema';
import { CharacterInventorySumAggregateInputObjectSchema } from './objects/CharacterInventorySumAggregateInput.schema'

export const CharacterInventoryAggregateSchema = z.object({ orderBy: z.union([CharacterInventoryOrderByWithRelationInputObjectSchema, CharacterInventoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterInventoryWhereInputObjectSchema.optional(), cursor: CharacterInventoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CharacterInventoryCountAggregateInputObjectSchema ]).optional(), _min: CharacterInventoryMinAggregateInputObjectSchema.optional(), _max: CharacterInventoryMaxAggregateInputObjectSchema.optional(), _avg: CharacterInventoryAvgAggregateInputObjectSchema.optional(), _sum: CharacterInventorySumAggregateInputObjectSchema.optional() })