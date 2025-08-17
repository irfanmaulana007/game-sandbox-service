import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentCreateInputObjectSchema } from './objects/CharacterEquipmentCreateInput.schema';
import { CharacterEquipmentUncheckedCreateInputObjectSchema } from './objects/CharacterEquipmentUncheckedCreateInput.schema'

export const CharacterEquipmentCreateOneSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), data: z.union([CharacterEquipmentCreateInputObjectSchema, CharacterEquipmentUncheckedCreateInputObjectSchema])  })