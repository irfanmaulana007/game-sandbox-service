import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyJobInputObjectSchema } from './CharacterCreateManyJobInput.schema'

export const CharacterCreateManyJobInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyJobInputEnvelope, Prisma.CharacterCreateManyJobInputEnvelope> = z.object({
  data: z.union([z.lazy(() => CharacterCreateManyJobInputObjectSchema), z.lazy(() => CharacterCreateManyJobInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyJobInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => CharacterCreateManyJobInputObjectSchema), z.lazy(() => CharacterCreateManyJobInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
