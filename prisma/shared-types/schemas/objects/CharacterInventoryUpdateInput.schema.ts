import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema } from './CharacterUpdateOneRequiredWithoutInventoryNestedInput.schema';
import { ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema } from './ItemUpdateOneRequiredWithoutCharacterInventoryNestedInput.schema'

export const CharacterInventoryUpdateInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateInput, Prisma.CharacterInventoryUpdateInput> = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema).optional()
}).strict();
export const CharacterInventoryUpdateInputObjectZodSchema = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema).optional(),
  item: z.lazy(() => ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema).optional()
}).strict();
