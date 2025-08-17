import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateManyMonsterInputObjectSchema } from './BattleLogCreateManyMonsterInput.schema'

export const BattleLogCreateManyMonsterInputEnvelopeObjectSchema: z.ZodType<Prisma.BattleLogCreateManyMonsterInputEnvelope, Prisma.BattleLogCreateManyMonsterInputEnvelope> = z.object({
  data: z.union([z.lazy(() => BattleLogCreateManyMonsterInputObjectSchema), z.lazy(() => BattleLogCreateManyMonsterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BattleLogCreateManyMonsterInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => BattleLogCreateManyMonsterInputObjectSchema), z.lazy(() => BattleLogCreateManyMonsterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
