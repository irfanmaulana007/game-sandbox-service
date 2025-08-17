import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterUpdateManyMutationInputObjectSchema } from './objects/MonsterUpdateManyMutationInput.schema';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema'

export const MonsterUpdateManyAndReturnSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), data: MonsterUpdateManyMutationInputObjectSchema, where: MonsterWhereInputObjectSchema.optional()  })