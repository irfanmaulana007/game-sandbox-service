import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogCreateManyInputObjectSchema } from './objects/BattleLogCreateManyInput.schema'

export const BattleLogCreateManyAndReturnSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), data: z.union([ BattleLogCreateManyInputObjectSchema, z.array(BattleLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })