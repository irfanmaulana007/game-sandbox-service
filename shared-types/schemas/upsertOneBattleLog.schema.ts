import { z } from 'zod';
import { BattleLogSelectObjectSchema } from './objects/BattleLogSelect.schema';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './objects/BattleLogWhereUniqueInput.schema';
import { BattleLogCreateInputObjectSchema } from './objects/BattleLogCreateInput.schema';
import { BattleLogUncheckedCreateInputObjectSchema } from './objects/BattleLogUncheckedCreateInput.schema';
import { BattleLogUpdateInputObjectSchema } from './objects/BattleLogUpdateInput.schema';
import { BattleLogUncheckedUpdateInputObjectSchema } from './objects/BattleLogUncheckedUpdateInput.schema'

export const BattleLogUpsertSchema = z.object({ select: BattleLogSelectObjectSchema.optional(), include: BattleLogIncludeObjectSchema.optional(), where: BattleLogWhereUniqueInputObjectSchema, create: z.union([ BattleLogCreateInputObjectSchema, BattleLogUncheckedCreateInputObjectSchema ]), update: z.union([ BattleLogUpdateInputObjectSchema, BattleLogUncheckedUpdateInputObjectSchema ])  })