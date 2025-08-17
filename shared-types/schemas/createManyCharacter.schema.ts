import { z } from 'zod';
import { CharacterCreateManyInputObjectSchema } from './objects/CharacterCreateManyInput.schema'

export const CharacterCreateManySchema = z.object({ data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })