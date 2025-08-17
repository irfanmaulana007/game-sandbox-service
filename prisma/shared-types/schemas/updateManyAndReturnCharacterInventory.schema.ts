import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryUpdateManyMutationInputObjectSchema } from './objects/CharacterInventoryUpdateManyMutationInput.schema';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema'

export const CharacterInventoryUpdateManyAndReturnSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), data: CharacterInventoryUpdateManyMutationInputObjectSchema, where: CharacterInventoryWhereInputObjectSchema.optional()  })