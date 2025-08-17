import { z } from 'zod';
import { GameMapCreateManyInputObjectSchema } from './objects/GameMapCreateManyInput.schema'

export const GameMapCreateManySchema = z.object({ data: z.union([ GameMapCreateManyInputObjectSchema, z.array(GameMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })