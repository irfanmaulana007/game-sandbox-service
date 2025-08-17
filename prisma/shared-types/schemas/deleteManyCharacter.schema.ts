import { z } from 'zod';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema'

export const CharacterDeleteManySchema = z.object({ where: CharacterWhereInputObjectSchema.optional()  })