import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateManyItemInputObjectSchema } from './CharacterInventoryCreateManyItemInput.schema'

export const CharacterInventoryCreateManyItemInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateManyItemInputEnvelope, Prisma.CharacterInventoryCreateManyItemInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterInventoryCreateManyItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateManyItemInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterInventoryCreateManyItemInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterInventoryCreateManyItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateManyItemInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
