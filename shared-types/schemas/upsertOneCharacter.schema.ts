import { z } from 'zod';
import { CharacterSelectObjectSchema } from './objects/CharacterSelect.schema';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterCreateInputObjectSchema } from './objects/CharacterCreateInput.schema';
import { CharacterUncheckedCreateInputObjectSchema } from './objects/CharacterUncheckedCreateInput.schema';
import { CharacterUpdateInputObjectSchema } from './objects/CharacterUpdateInput.schema';
import { CharacterUncheckedUpdateInputObjectSchema } from './objects/CharacterUncheckedUpdateInput.schema'

export const CharacterUpsertSchema = z.object({ select: CharacterSelectObjectSchema.optional(), include: CharacterIncludeObjectSchema.optional(), where: CharacterWhereUniqueInputObjectSchema, create: z.union([ CharacterCreateInputObjectSchema, CharacterUncheckedCreateInputObjectSchema ]), update: z.union([ CharacterUpdateInputObjectSchema, CharacterUncheckedUpdateInputObjectSchema ])  })