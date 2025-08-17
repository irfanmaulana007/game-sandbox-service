import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { EnumBattleResultFieldUpdateOperationsInputObjectSchema } from './EnumBattleResultFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

export const BattleLogUncheckedUpdateManyWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUncheckedUpdateManyWithoutMonsterInput, Prisma.BattleLogUncheckedUpdateManyWithoutMonsterInput> = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleResult: z.union([BattleResultSchema, z.lazy(() => EnumBattleResultFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  monsterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  turnsTaken: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleDate: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BattleLogUncheckedUpdateManyWithoutMonsterInputObjectZodSchema = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleResult: z.union([BattleResultSchema, z.lazy(() => EnumBattleResultFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  monsterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  turnsTaken: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleDate: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
