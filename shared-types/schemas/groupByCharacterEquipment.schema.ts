import { z } from 'zod';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema';
import { CharacterEquipmentOrderByWithAggregationInputObjectSchema } from './objects/CharacterEquipmentOrderByWithAggregationInput.schema';
import { CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema } from './objects/CharacterEquipmentScalarWhereWithAggregatesInput.schema';
import { CharacterEquipmentScalarFieldEnumSchema } from './enums/CharacterEquipmentScalarFieldEnum.schema';
import { CharacterEquipmentCountAggregateInputObjectSchema } from './objects/CharacterEquipmentCountAggregateInput.schema';
import { CharacterEquipmentMinAggregateInputObjectSchema } from './objects/CharacterEquipmentMinAggregateInput.schema';
import { CharacterEquipmentMaxAggregateInputObjectSchema } from './objects/CharacterEquipmentMaxAggregateInput.schema'

export const CharacterEquipmentGroupBySchema = z.object({ where: CharacterEquipmentWhereInputObjectSchema.optional(), orderBy: z.union([CharacterEquipmentOrderByWithAggregationInputObjectSchema, CharacterEquipmentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CharacterEquipmentScalarFieldEnumSchema), _count: z.union([z.boolean(), CharacterEquipmentCountAggregateInputObjectSchema]).optional(), _min: CharacterEquipmentMinAggregateInputObjectSchema.optional(), _max: CharacterEquipmentMaxAggregateInputObjectSchema.optional() })