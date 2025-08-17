import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './objects/BattleLogWhereUniqueInput.schema'

export const BattleLogFindUniqueSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), where: BattleLogWhereUniqueInputObjectSchema })