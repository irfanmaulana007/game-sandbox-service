import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

export const CharacterInventoryUncheckedUpdateManyWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedUpdateManyWithoutItemInput, Prisma.CharacterInventoryUncheckedUpdateManyWithoutItemInput> = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterInventoryUncheckedUpdateManyWithoutItemInputObjectZodSchema = z.object({
  characterId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
