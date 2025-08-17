import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutCharacterInventoryNestedInput.schema'

export const CharacterInventoryUpdateWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateWithoutCharacterInput, Prisma.CharacterInventoryUpdateWithoutCharacterInput> = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema).optional()
}).strict();
export const CharacterInventoryUpdateWithoutCharacterInputObjectZodSchema = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema).optional()
}).strict();
