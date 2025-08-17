import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterUpdateInputObjectSchema } from './objects/CharacterUpdateInput.schema';
import { CharacterUncheckedUpdateInputObjectSchema } from './objects/CharacterUncheckedUpdateInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema'

export const CharacterUpdateOneSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), data: z.union([CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema]), where: CharacterWhereUniqueInputObjectSchema  })