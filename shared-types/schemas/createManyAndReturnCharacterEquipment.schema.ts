import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentCreateManyInputObjectSchema } from './objects/CharacterEquipmentCreateManyInput.schema'

export const CharacterEquipmentCreateManyAndReturnSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), data: z.union([ CharacterEquipmentCreateManyInputObjectSchema, z.array(CharacterEquipmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })