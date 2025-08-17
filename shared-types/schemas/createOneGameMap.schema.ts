import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapCreateInputObjectSchema } from './objects/GameMapCreateInput.schema';
import { GameMapUncheckedCreateInputObjectSchema } from './objects/GameMapUncheckedCreateInput.schema'

export const GameMapCreateOneSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), data: z.union([GameMapCreateInputObjectSchema, GameMapUncheckedCreateInputObjectSchema])  })