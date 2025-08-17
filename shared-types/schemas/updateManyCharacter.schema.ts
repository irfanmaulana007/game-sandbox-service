import { z } from 'zod';
import { CharacterUpdateManyMutationInputObjectSchema } from './objects/CharacterUpdateManyMutationInput.schema';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema'

export const CharacterUpdateManySchema = z.object({ data: CharacterUpdateManyMutationInputObjectSchema, where: CharacterWhereInputObjectSchema.optional()  })