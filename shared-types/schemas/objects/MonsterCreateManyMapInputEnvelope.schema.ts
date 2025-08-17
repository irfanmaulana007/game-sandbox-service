import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateManyMapInputObjectSchema } from './MonsterCreateManyMapInput.schema'

export const MonsterCreateManyMapInputEnvelopeObjectSchema: z.ZodType<Prisma.MonsterCreateManyMapInputEnvelope, Prisma.MonsterCreateManyMapInputEnvelope> = z.object({
  data: z.union([z.lazy(() => MonsterCreateManyMapInputObjectSchema), z.lazy(() => MonsterCreateManyMapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MonsterCreateManyMapInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => MonsterCreateManyMapInputObjectSchema), z.lazy(() => MonsterCreateManyMapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
