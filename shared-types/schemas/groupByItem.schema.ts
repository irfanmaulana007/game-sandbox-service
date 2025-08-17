import { z } from 'zod';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemOrderByWithAggregationInputObjectSchema } from './objects/ItemOrderByWithAggregationInput.schema';
import { ItemScalarWhereWithAggregatesInputObjectSchema } from './objects/ItemScalarWhereWithAggregatesInput.schema';
import { ItemScalarFieldEnumSchema } from './enums/ItemScalarFieldEnum.schema';
import { ItemCountAggregateInputObjectSchema } from './objects/ItemCountAggregateInput.schema';
import { ItemMinAggregateInputObjectSchema } from './objects/ItemMinAggregateInput.schema';
import { ItemMaxAggregateInputObjectSchema } from './objects/ItemMaxAggregateInput.schema'

export const ItemGroupBySchema = z.object({ where: ItemWhereInputObjectSchema.optional(), orderBy: z.union([ItemOrderByWithAggregationInputObjectSchema, ItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ItemScalarFieldEnumSchema), _count: z.union([z.boolean(), ItemCountAggregateInputObjectSchema]).optional(), _min: ItemMinAggregateInputObjectSchema.optional(), _max: ItemMaxAggregateInputObjectSchema.optional() })