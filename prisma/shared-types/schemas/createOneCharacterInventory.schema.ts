import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryCreateInputObjectSchema } from './objects/CharacterInventoryCreateInput.schema';
import { CharacterInventoryUncheckedCreateInputObjectSchema } from './objects/CharacterInventoryUncheckedCreateInput.schema'

export const CharacterInventoryCreateOneSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), data: z.union([CharacterInventoryCreateInputObjectSchema, CharacterInventoryUncheckedCreateInputObjectSchema])  })