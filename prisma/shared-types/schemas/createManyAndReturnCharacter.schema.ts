import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterCreateManyInputObjectSchema } from './objects/CharacterCreateManyInput.schema'

export const CharacterCreateManyAndReturnSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([ CharacterCreateManyInputObjectSchema, z.array(CharacterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })