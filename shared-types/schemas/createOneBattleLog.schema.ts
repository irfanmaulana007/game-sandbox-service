import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogCreateInputObjectSchema } from './objects/BattleLogCreateInput.schema';
import { BattleLogUncheckedCreateInputObjectSchema } from './objects/BattleLogUncheckedCreateInput.schema'

export const BattleLogCreateOneSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), data: z.union([BattleLogCreateInputObjectSchema, BattleLogUncheckedCreateInputObjectSchema])  })