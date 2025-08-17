import { z } from 'zod';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema';
import { CharacterInventoryOrderByWithAggregationInputObjectSchema } from './objects/CharacterInventoryOrderByWithAggregationInput.schema';
import { CharacterInventoryScalarWhereWithAggregatesInputObjectSchema } from './objects/CharacterInventoryScalarWhereWithAggregatesInput.schema';
import { CharacterInventoryScalarFieldEnumSchema } from './enums/CharacterInventoryScalarFieldEnum.schema';
import { CharacterInventoryCountAggregateInputObjectSchema } from './objects/CharacterInventoryCountAggregateInput.schema';
import { CharacterInventoryMinAggregateInputObjectSchema } from './objects/CharacterInventoryMinAggregateInput.schema';
import { CharacterInventoryMaxAggregateInputObjectSchema } from './objects/CharacterInventoryMaxAggregateInput.schema'

export const CharacterInventoryGroupBySchema = z.object({ where: CharacterInventoryWhereInputObjectSchema.optional(), orderBy: z.union([CharacterInventoryOrderByWithAggregationInputObjectSchema, CharacterInventoryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CharacterInventoryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CharacterInventoryScalarFieldEnumSchema), _count: z.union([z.boolean(), CharacterInventoryCountAggregateInputObjectSchema]).optional(), _min: CharacterInventoryMinAggregateInputObjectSchema.optional(), _max: CharacterInventoryMaxAggregateInputObjectSchema.optional() })