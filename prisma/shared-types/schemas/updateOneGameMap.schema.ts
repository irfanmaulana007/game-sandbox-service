import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapUpdateInputObjectSchema } from './objects/GameMapUpdateInput.schema';
import { GameMapUncheckedUpdateInputObjectSchema } from './objects/GameMapUncheckedUpdateInput.schema';
import { GameMapWhereUniqueInputObjectSchema } from './objects/GameMapWhereUniqueInput.schema'

export const GameMapUpdateOneSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), data: z.union([GameMapUpdateInputObjectSchema, GameMapUncheckedUpdateInputObjectSchema]), where: GameMapWhereUniqueInputObjectSchema  })