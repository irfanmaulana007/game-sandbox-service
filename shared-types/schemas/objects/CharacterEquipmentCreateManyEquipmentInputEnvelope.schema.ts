import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateManyEquipmentInputObjectSchema } from './CharacterEquipmentCreateManyEquipmentInput.schema'

export const CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateManyEquipmentInputEnvelope, Prisma.CharacterEquipmentCreateManyEquipmentInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterEquipmentCreateManyEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateManyEquipmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterEquipmentCreateManyEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateManyEquipmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
