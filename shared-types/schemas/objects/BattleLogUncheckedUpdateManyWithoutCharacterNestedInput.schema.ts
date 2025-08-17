import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateWithoutCharacterInputObjectSchema } from './BattleLogCreateWithoutCharacterInput.schema';
import { BattleLogUncheckedCreateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedCreateWithoutCharacterInput.schema';
import { BattleLogCreateOrConnectWithoutCharacterInputObjectSchema } from './BattleLogCreateOrConnectWithoutCharacterInput.schema';
import { BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema } from './BattleLogUpsertWithWhereUniqueWithoutCharacterInput.schema';
import { BattleLogCreateManyCharacterInputEnvelopeObjectSchema } from './BattleLogCreateManyCharacterInputEnvelope.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema } from './BattleLogUpdateWithWhereUniqueWithoutCharacterInput.schema';
import { BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema } from './BattleLogUpdateManyWithWhereWithoutCharacterInput.schema';
import { BattleLogScalarWhereInputObjectSchema } from './BattleLogScalarWhereInput.schema'

export const BattleLogUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema: z.ZodType<Prisma.BattleLogUncheckedUpdateManyWithoutCharacterNestedInput, Prisma.BattleLogUncheckedUpdateManyWithoutCharacterNestedInput> = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BattleLogUncheckedUpdateManyWithoutCharacterNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
