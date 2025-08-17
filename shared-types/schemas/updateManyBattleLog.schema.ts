import { z } from 'zod';
import { BattleLogUpdateManyMutationInputObjectSchema } from './objects/BattleLogUpdateManyMutationInput.schema';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema'

export const BattleLogUpdateManySchema = z.object({ data: BattleLogUpdateManyMutationInputObjectSchema, where: BattleLogWhereInputObjectSchema.optional()  })