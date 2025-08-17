import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentUpdateManyMutationInputObjectSchema } from './objects/CharacterEquipmentUpdateManyMutationInput.schema';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema'

export const CharacterEquipmentUpdateManyAndReturnSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), data: CharacterEquipmentUpdateManyMutationInputObjectSchema, where: CharacterEquipmentWhereInputObjectSchema.optional()  })