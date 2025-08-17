import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryCreateManyInputObjectSchema } from './objects/CharacterInventoryCreateManyInput.schema'

export const CharacterInventoryCreateManyAndReturnSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), data: z.union([ CharacterInventoryCreateManyInputObjectSchema, z.array(CharacterInventoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })