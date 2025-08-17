import { z } from 'zod';
import { CharacterInventoryCreateManyInputObjectSchema } from './objects/CharacterInventoryCreateManyInput.schema'

export const CharacterInventoryCreateManySchema = z.object({ data: z.union([ CharacterInventoryCreateManyInputObjectSchema, z.array(CharacterInventoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })