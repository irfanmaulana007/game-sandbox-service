import { z } from 'zod';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema'

export const GameMapDeleteManySchema = z.object({ where: GameMapWhereInputObjectSchema.optional()  })