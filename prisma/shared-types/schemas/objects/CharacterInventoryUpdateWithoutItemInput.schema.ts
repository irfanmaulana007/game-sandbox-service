import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema } from './CharacterUpdateOneRequiredWithoutInventoryNestedInput.schema'

export const CharacterInventoryUpdateWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateWithoutItemInput, Prisma.CharacterInventoryUpdateWithoutItemInput> = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema).optional()
}).strict();
export const CharacterInventoryUpdateWithoutItemInputObjectZodSchema = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  character: z.lazy(() => CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema).optional()
}).strict();
