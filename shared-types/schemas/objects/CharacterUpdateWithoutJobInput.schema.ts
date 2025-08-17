import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCharactersNestedInput.schema';
import { CharacterEquipmentUpdateManyWithoutCharacterNestedInputObjectSchema } from './CharacterEquipmentUpdateManyWithoutCharacterNestedInput.schema';
import { CharacterInventoryUpdateManyWithoutCharacterNestedInputObjectSchema } from './CharacterInventoryUpdateManyWithoutCharacterNestedInput.schema';
import { BattleLogUpdateManyWithoutCharacterNestedInputObjectSchema } from './BattleLogUpdateManyWithoutCharacterNestedInput.schema'

export const CharacterUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithoutJobInput, Prisma.CharacterUpdateWithoutJobInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  user: z.lazy(() => UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  equipment: z.lazy(() => CharacterEquipmentUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUpdateManyWithoutCharacterNestedInputObjectSchema).optional()
}).strict();
export const CharacterUpdateWithoutJobInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  user: z.lazy(() => UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema).optional(),
  equipment: z.lazy(() => CharacterEquipmentUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUpdateManyWithoutCharacterNestedInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUpdateManyWithoutCharacterNestedInputObjectSchema).optional()
}).strict();
