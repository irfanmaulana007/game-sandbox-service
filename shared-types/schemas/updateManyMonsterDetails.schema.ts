import { z } from 'zod';
import { MonsterDetailsUpdateManyMutationInputObjectSchema } from './objects/MonsterDetailsUpdateManyMutationInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema'

export const MonsterDetailsUpdateManySchema = z.object({ data: MonsterDetailsUpdateManyMutationInputObjectSchema, where: MonsterDetailsWhereInputObjectSchema.optional()  })