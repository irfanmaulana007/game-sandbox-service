import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateWithoutMonsterInputObjectSchema } from './BattleLogCreateWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateWithoutMonsterInput.schema';
import { BattleLogCreateOrConnectWithoutMonsterInputObjectSchema } from './BattleLogCreateOrConnectWithoutMonsterInput.schema';
import { BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema } from './BattleLogUpsertWithWhereUniqueWithoutMonsterInput.schema';
import { BattleLogCreateManyMonsterInputEnvelopeObjectSchema } from './BattleLogCreateManyMonsterInputEnvelope.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema } from './BattleLogUpdateWithWhereUniqueWithoutMonsterInput.schema';
import { BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema } from './BattleLogUpdateManyWithWhereWithoutMonsterInput.schema';
import { BattleLogScalarWhereInputObjectSchema } from './BattleLogScalarWhereInput.schema'

export const BattleLogUpdateManyWithoutMonsterNestedInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateManyWithoutMonsterNestedInput, Prisma.BattleLogUpdateManyWithoutMonsterNestedInput> = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyMonsterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BattleLogUpdateManyWithoutMonsterNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutMonsterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyMonsterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
