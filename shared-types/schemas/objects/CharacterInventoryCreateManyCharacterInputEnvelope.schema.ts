import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateManyCharacterInputObjectSchema } from './CharacterInventoryCreateManyCharacterInput.schema'

export const CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateManyCharacterInputEnvelope, Prisma.CharacterInventoryCreateManyCharacterInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterInventoryCreateManyCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterInventoryCreateManyCharacterInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterInventoryCreateManyCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
