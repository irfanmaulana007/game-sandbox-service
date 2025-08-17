import { z } from 'zod';
import { MonsterDetailsCreateManyInputObjectSchema } from './objects/MonsterDetailsCreateManyInput.schema'

export const MonsterDetailsCreateManySchema = z.object({ data: z.union([ MonsterDetailsCreateManyInputObjectSchema, z.array(MonsterDetailsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })