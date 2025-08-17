import { z } from 'zod';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema'

export const MonsterDetailsDeleteManySchema = z.object({ where: MonsterDetailsWhereInputObjectSchema.optional()  })