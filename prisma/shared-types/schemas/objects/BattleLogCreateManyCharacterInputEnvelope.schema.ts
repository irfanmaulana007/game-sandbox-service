import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateManyCharacterInputObjectSchema } from './BattleLogCreateManyCharacterInput.schema'

export const BattleLogCreateManyCharacterInputEnvelopeObjectSchema: z.ZodType<Prisma.BattleLogCreateManyCharacterInputEnvelope, Prisma.BattleLogCreateManyCharacterInputEnvelope> = z.object({
  data: z.union([z.lazy(() => BattleLogCreateManyCharacterInputObjectSchema), z.lazy(() => BattleLogCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BattleLogCreateManyCharacterInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => BattleLogCreateManyCharacterInputObjectSchema), z.lazy(() => BattleLogCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
