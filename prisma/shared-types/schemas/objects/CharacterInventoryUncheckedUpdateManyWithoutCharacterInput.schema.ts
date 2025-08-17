import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

export const CharacterInventoryUncheckedUpdateManyWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedUpdateManyWithoutCharacterInput, Prisma.CharacterInventoryUncheckedUpdateManyWithoutCharacterInput> = z.object({
  itemId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterInventoryUncheckedUpdateManyWithoutCharacterInputObjectZodSchema = z.object({
  itemId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
