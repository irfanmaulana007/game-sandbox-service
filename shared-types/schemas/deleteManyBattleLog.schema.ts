import { z } from 'zod';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema'

export const BattleLogDeleteManySchema = z.object({ where: BattleLogWhereInputObjectSchema.optional()  })