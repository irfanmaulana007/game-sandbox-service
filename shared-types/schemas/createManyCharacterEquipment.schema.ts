import { z } from 'zod';
import { CharacterEquipmentCreateManyInputObjectSchema } from './objects/CharacterEquipmentCreateManyInput.schema'

export const CharacterEquipmentCreateManySchema = z.object({ data: z.union([ CharacterEquipmentCreateManyInputObjectSchema, z.array(CharacterEquipmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })