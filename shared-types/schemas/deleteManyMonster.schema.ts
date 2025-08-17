import { z } from 'zod';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema'

export const MonsterDeleteManySchema = z.object({ where: MonsterWhereInputObjectSchema.optional()  })