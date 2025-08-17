import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema } from './CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInput.schema';
import { CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema } from './CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput.schema';
import { BattleLogUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema } from './BattleLogUncheckedUpdateManyWithoutCharacterNestedInput.schema'

export const CharacterUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateInput, Prisma.CharacterUncheckedUpdateInput> = z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experience: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  health: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxHealth: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  attack: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  defense: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  speed: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  critical: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  statusPoints: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  gold: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipment: z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional()
}).strict();
export const CharacterUncheckedUpdateInputObjectZodSchema = z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  experience: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  health: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxHealth: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  attack: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  defense: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  speed: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  critical: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  statusPoints: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  gold: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  equipment: z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema).optional()
}).strict();
