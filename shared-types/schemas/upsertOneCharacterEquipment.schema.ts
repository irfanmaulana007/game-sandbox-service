import { z } from 'zod';
import { CharacterEquipmentSelectObjectSchema } from './objects/CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './objects/CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentCreateInputObjectSchema } from './objects/CharacterEquipmentCreateInput.schema';
import { CharacterEquipmentUncheckedCreateInputObjectSchema } from './objects/CharacterEquipmentUncheckedCreateInput.schema';
import { CharacterEquipmentUpdateInputObjectSchema } from './objects/CharacterEquipmentUpdateInput.schema';
import { CharacterEquipmentUncheckedUpdateInputObjectSchema } from './objects/CharacterEquipmentUncheckedUpdateInput.schema'

export const CharacterEquipmentUpsertSchema = z.object({ select: CharacterEquipmentSelectObjectSchema.optional(), include: CharacterEquipmentIncludeObjectSchema.optional(), where: CharacterEquipmentWhereUniqueInputObjectSchema, create: z.union([ CharacterEquipmentCreateInputObjectSchema, CharacterEquipmentUncheckedCreateInputObjectSchema ]), update: z.union([ CharacterEquipmentUpdateInputObjectSchema, CharacterEquipmentUncheckedUpdateInputObjectSchema ])  })