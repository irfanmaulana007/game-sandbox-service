import { z } from 'zod';
import { BattleLogCreateManyInputObjectSchema } from './objects/BattleLogCreateManyInput.schema'

export const BattleLogCreateManySchema = z.object({ data: z.union([ BattleLogCreateManyInputObjectSchema, z.array(BattleLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })