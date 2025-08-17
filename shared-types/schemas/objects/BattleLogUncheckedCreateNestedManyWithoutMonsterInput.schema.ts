import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateWithoutMonsterInputObjectSchema } from './BattleLogCreateWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateWithoutMonsterInput.schema';
import { BattleLogCreateOrConnectWithoutMonsterInputObjectSchema } from './BattleLogCreateOrConnectWithoutMonsterInput.schema';
import { BattleLogCreateManyMonsterInputEnvelopeObjectSchema } from './BattleLogCreateManyMonsterInputEnvelope.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema'

export const BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUncheckedCreateNestedManyWithoutMonsterInput, Prisma.BattleLogUncheckedCreateNestedManyWithoutMonsterInput> = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyMonsterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BattleLogUncheckedCreateNestedManyWithoutMonsterInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyMonsterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
