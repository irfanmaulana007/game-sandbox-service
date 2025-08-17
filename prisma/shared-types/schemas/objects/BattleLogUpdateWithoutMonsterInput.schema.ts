import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { EnumBattleResultFieldUpdateOperationsInputObjectSchema } from './EnumBattleResultFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateOneRequiredWithoutBattleLogsNestedInputObjectSchema } from './CharacterUpdateOneRequiredWithoutBattleLogsNestedInput.schema'

export const BattleLogUpdateWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateWithoutMonsterInput, Prisma.BattleLogUpdateWithoutMonsterInput> = z.object({
  battleResult: z.union([BattleResultSchema, z.lazy(() => EnumBattleResultFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  monsterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  turnsTaken: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleDate: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutBattleLogsNestedInputObjectSchema).optional()
}).strict();
export const BattleLogUpdateWithoutMonsterInputObjectZodSchema = z.object({
  battleResult: z.union([BattleResultSchema, z.lazy(() => EnumBattleResultFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  monsterHealthRemaining: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  turnsTaken: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldGained: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  battleDate: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutBattleLogsNestedInputObjectSchema).optional()
}).strict();
