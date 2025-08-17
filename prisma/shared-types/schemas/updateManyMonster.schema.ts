import { z } from 'zod';
import { MonsterUpdateManyMutationInputObjectSchema } from './objects/MonsterUpdateManyMutationInput.schema';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema'

export const MonsterUpdateManySchema = z.object({ data: MonsterUpdateManyMutationInputObjectSchema, where: MonsterWhereInputObjectSchema.optional()  })