import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogUpdateInputObjectSchema } from './objects/BattleLogUpdateInput.schema';
import { BattleLogUncheckedUpdateInputObjectSchema } from './objects/BattleLogUncheckedUpdateInput.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './objects/BattleLogWhereUniqueInput.schema'

export const BattleLogUpdateOneSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), data: z.union([BattleLogUpdateInputObjectSchema, BattleLogUncheckedUpdateInputObjectSchema]), where: BattleLogWhereUniqueInputObjectSchema  })