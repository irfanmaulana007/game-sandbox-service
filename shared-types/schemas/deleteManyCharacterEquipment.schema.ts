import { z } from 'zod';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema'

export const CharacterEquipmentDeleteManySchema = z.object({ where: CharacterEquipmentWhereInputObjectSchema.optional()  })