import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryUpdateInputObjectSchema } from './objects/CharacterInventoryUpdateInput.schema';
import { CharacterInventoryUncheckedUpdateInputObjectSchema } from './objects/CharacterInventoryUncheckedUpdateInput.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './objects/CharacterInventoryWhereUniqueInput.schema'

export const CharacterInventoryUpdateOneSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), data: z.union([CharacterInventoryUpdateInputObjectSchema, CharacterInventoryUncheckedUpdateInputObjectSchema]), where: CharacterInventoryWhereUniqueInputObjectSchema  })