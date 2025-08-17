import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './objects/CharacterInventoryWhereUniqueInput.schema'

export const CharacterInventoryFindUniqueSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), where: CharacterInventoryWhereUniqueInputObjectSchema })