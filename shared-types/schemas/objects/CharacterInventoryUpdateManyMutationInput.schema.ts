import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

export const CharacterInventoryUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateManyMutationInput, Prisma.CharacterInventoryUpdateManyMutationInput> = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacterInventoryUpdateManyMutationInputObjectZodSchema = z.object({
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
