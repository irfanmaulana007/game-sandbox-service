import { z } from 'zod';
import { GameMapUpdateManyMutationInputObjectSchema } from './objects/GameMapUpdateManyMutationInput.schema';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema'

export const GameMapUpdateManySchema = z.object({ data: GameMapUpdateManyMutationInputObjectSchema, where: GameMapWhereInputObjectSchema.optional()  })