import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateManyCharacterInputObjectSchema } from './CharacterEquipmentCreateManyCharacterInput.schema'

export const CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateManyCharacterInputEnvelope, Prisma.CharacterEquipmentCreateManyCharacterInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterEquipmentCreateManyCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterEquipmentCreateManyCharacterInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterEquipmentCreateManyCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
