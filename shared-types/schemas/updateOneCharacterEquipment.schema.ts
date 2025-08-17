import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentUpdateInputObjectSchema } from './objects/CharacterEquipmentUpdateInput.schema';
import { CharacterEquipmentUncheckedUpdateInputObjectSchema } from './objects/CharacterEquipmentUncheckedUpdateInput.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './objects/CharacterEquipmentWhereUniqueInput.schema'

export const CharacterEquipmentUpdateOneSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), data: z.union([CharacterEquipmentUpdateInputObjectSchema, CharacterEquipmentUncheckedUpdateInputObjectSchema]), where: CharacterEquipmentWhereUniqueInputObjectSchema  })