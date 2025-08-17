import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterCreateInputObjectSchema } from './objects/CharacterCreateInput.schema';
import { CharacterUncheckedCreateInputObjectSchema } from './objects/CharacterUncheckedCreateInput.schema'

export const CharacterCreateOneSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema])  })