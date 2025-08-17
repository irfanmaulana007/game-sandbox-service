import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyUserInputObjectSchema } from './CharacterCreateManyUserInput.schema'

export const CharacterCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyUserInputEnvelope, Prisma.CharacterCreateManyUserInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterCreateManyUserInputObjectSchema), z.lazy(() => CharacterCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyUserInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterCreateManyUserInputObjectSchema), z.lazy(() => CharacterCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
