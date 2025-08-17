import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogUpdateManyMutationInputObjectSchema } from './objects/BattleLogUpdateManyMutationInput.schema';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema'

export const BattleLogUpdateManyAndReturnSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), data: BattleLogUpdateManyMutationInputObjectSchema, where: BattleLogWhereInputObjectSchema.optional()  })