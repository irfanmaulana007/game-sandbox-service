import { z } from 'zod';
import { CharacterEquipmentUpdateManyMutationInputObjectSchema } from './objects/CharacterEquipmentUpdateManyMutationInput.schema';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema'

export const CharacterEquipmentUpdateManySchema = z.object({ data: CharacterEquipmentUpdateManyMutationInputObjectSchema, where: CharacterEquipmentWhereInputObjectSchema.optional()  })