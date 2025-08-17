import { z } from 'zod';
import { MonsterCreateManyInputObjectSchema } from './objects/MonsterCreateManyInput.schema'

export const MonsterCreateManySchema = z.object({ data: z.union([ MonsterCreateManyInputObjectSchema, z.array(MonsterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })