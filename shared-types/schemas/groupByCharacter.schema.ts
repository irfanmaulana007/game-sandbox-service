import { z } from 'zod';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterOrderByWithAggregationInputObjectSchema } from './objects/CharacterOrderByWithAggregationInput.schema';
import { CharacterScalarWhereWithAggregatesInputObjectSchema } from './objects/CharacterScalarWhereWithAggregatesInput.schema';
import { CharacterScalarFieldEnumSchema } from './enums/CharacterScalarFieldEnum.schema';
import { CharacterCountAggregateInputObjectSchema } from './objects/CharacterCountAggregateInput.schema';
import { CharacterMinAggregateInputObjectSchema } from './objects/CharacterMinAggregateInput.schema';
import { CharacterMaxAggregateInputObjectSchema } from './objects/CharacterMaxAggregateInput.schema'

export const CharacterGroupBySchema = z.object({ where: CharacterWhereInputObjectSchema.optional(), orderBy: z.union([CharacterOrderByWithAggregationInputObjectSchema, CharacterOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CharacterScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CharacterScalarFieldEnumSchema), _count: z.union([z.boolean(), CharacterCountAggregateInputObjectSchema]).optional(), _min: CharacterMinAggregateInputObjectSchema.optional(), _max: CharacterMaxAggregateInputObjectSchema.optional() })