import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterCreateManyInputObjectSchema } from './objects/MonsterCreateManyInput.schema'

export const MonsterCreateManyAndReturnSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), data: z.union([ MonsterCreateManyInputObjectSchema, z.array(MonsterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })