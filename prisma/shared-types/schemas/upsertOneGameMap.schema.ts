import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapWhereUniqueInputObjectSchema } from './objects/GameMapWhereUniqueInput.schema';
import { GameMapCreateInputObjectSchema } from './objects/GameMapCreateInput.schema';
import { GameMapUncheckedCreateInputObjectSchema } from './objects/GameMapUncheckedCreateInput.schema';
import { GameMapUpdateInputObjectSchema } from './objects/GameMapUpdateInput.schema';
import { GameMapUncheckedUpdateInputObjectSchema } from './objects/GameMapUncheckedUpdateInput.schema'

export const GameMapUpsertSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), where: GameMapWhereUniqueInputObjectSchema, create: z.union([ GameMapCreateInputObjectSchema, GameMapUncheckedCreateInputObjectSchema ]), update: z.union([ GameMapUpdateInputObjectSchema, GameMapUncheckedUpdateInputObjectSchema ])  })