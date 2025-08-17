import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema'

export const EnumBattleResultFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBattleResultFieldUpdateOperationsInput, Prisma.EnumBattleResultFieldUpdateOperationsInput> = z.object({
  set: BattleResultSchema.optional()
}).strict();
export const EnumBattleResultFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: BattleResultSchema.optional()
}).strict();
