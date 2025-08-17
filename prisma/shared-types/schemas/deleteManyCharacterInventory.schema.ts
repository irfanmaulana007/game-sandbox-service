import { z } from 'zod';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema'

export const CharacterInventoryDeleteManySchema = z.object({ where: CharacterInventoryWhereInputObjectSchema.optional()  })