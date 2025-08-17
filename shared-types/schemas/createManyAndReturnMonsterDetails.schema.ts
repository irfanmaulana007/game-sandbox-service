import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsCreateManyInputObjectSchema } from './objects/MonsterDetailsCreateManyInput.schema'

export const MonsterDetailsCreateManyAndReturnSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), data: z.union([ MonsterDetailsCreateManyInputObjectSchema, z.array(MonsterDetailsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })