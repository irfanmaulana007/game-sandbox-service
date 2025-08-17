import { z } from 'zod';
import { CharacterEquipmentOrderByWithRelationInputObjectSchema } from './objects/CharacterEquipmentOrderByWithRelationInput.schema';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './objects/CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentCountAggregateInputObjectSchema } from './objects/CharacterEquipmentCountAggregateInput.schema';
import { CharacterEquipmentMinAggregateInputObjectSchema } from './objects/CharacterEquipmentMinAggregateInput.schema';
import { CharacterEquipmentMaxAggregateInputObjectSchema } from './objects/CharacterEquipmentMaxAggregateInput.schema';
import { CharacterEquipmentAvgAggregateInputObjectSchema } from './objects/CharacterEquipmentAvgAggregateInput.schema';
import { CharacterEquipmentSumAggregateInputObjectSchema } from './objects/CharacterEquipmentSumAggregateInput.schema'

export const CharacterEquipmentAggregateSchema = z.object({ orderBy: z.union([CharacterEquipmentOrderByWithRelationInputObjectSchema, CharacterEquipmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterEquipmentWhereInputObjectSchema.optional(), cursor: CharacterEquipmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CharacterEquipmentCountAggregateInputObjectSchema ]).optional(), _min: CharacterEquipmentMinAggregateInputObjectSchema.optional(), _max: CharacterEquipmentMaxAggregateInputObjectSchema.optional(), _avg: CharacterEquipmentAvgAggregateInputObjectSchema.optional(), _sum: CharacterEquipmentSumAggregateInputObjectSchema.optional() })