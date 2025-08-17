import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapCreateManyInputObjectSchema } from './objects/GameMapCreateManyInput.schema'

export const GameMapCreateManyAndReturnSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), data: z.union([ GameMapCreateManyInputObjectSchema, z.array(GameMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })