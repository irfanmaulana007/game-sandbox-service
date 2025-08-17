import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { GameMapUpdateOneWithoutMonstersNestedInputObjectSchema } from './GameMapUpdateOneWithoutMonstersNestedInput.schema';
import { BattleLogUpdateManyWithoutMonsterNestedInputObjectSchema } from './BattleLogUpdateManyWithoutMonsterNestedInput.schema'

export const MonsterUpdateWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterUpdateWithoutDetailsInput, Prisma.MonsterUpdateWithoutDetailsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  health: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  attack: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  defense: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  speed: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  critical: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceReward: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldReward: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  map: z.lazy(() => GameMapUpdateOneWithoutMonstersNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUpdateManyWithoutMonsterNestedInputObjectSchema).optional()
}).strict();
export const MonsterUpdateWithoutDetailsInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  health: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  attack: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  defense: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  speed: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  critical: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experienceReward: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  goldReward: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  map: z.lazy(() => GameMapUpdateOneWithoutMonstersNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUpdateManyWithoutMonsterNestedInputObjectSchema).optional()
}).strict();
