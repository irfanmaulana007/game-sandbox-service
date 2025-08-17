import { z } from 'zod';
import { CharacterInventoryUpdateManyMutationInputObjectSchema } from './objects/CharacterInventoryUpdateManyMutationInput.schema';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema'

export const CharacterInventoryUpdateManySchema = z.object({ data: CharacterInventoryUpdateManyMutationInputObjectSchema, where: CharacterInventoryWhereInputObjectSchema.optional()  })