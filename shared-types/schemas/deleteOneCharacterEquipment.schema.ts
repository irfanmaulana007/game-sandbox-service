import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './objects/CharacterEquipmentWhereUniqueInput.schema'

export const CharacterEquipmentDeleteOneSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), where: CharacterEquipmentWhereUniqueInputObjectSchema  })