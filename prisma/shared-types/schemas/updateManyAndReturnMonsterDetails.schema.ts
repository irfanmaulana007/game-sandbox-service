import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsUpdateManyMutationInputObjectSchema } from './objects/MonsterDetailsUpdateManyMutationInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema'

export const MonsterDetailsUpdateManyAndReturnSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), data: MonsterDetailsUpdateManyMutationInputObjectSchema, where: MonsterDetailsWhereInputObjectSchema.optional()  })