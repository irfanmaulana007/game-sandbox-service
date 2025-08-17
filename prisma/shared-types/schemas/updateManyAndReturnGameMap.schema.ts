import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapUpdateManyMutationInputObjectSchema } from './objects/GameMapUpdateManyMutationInput.schema';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema'

export const GameMapUpdateManyAndReturnSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), data: GameMapUpdateManyMutationInputObjectSchema, where: GameMapWhereInputObjectSchema.optional()  })