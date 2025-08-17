import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutMapInputObjectSchema } from './MonsterCreateWithoutMapInput.schema';
import { MonsterUncheckedCreateWithoutMapInputObjectSchema } from './MonsterUncheckedCreateWithoutMapInput.schema';
import { MonsterCreateOrConnectWithoutMapInputObjectSchema } from './MonsterCreateOrConnectWithoutMapInput.schema';
import { MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema } from './MonsterUpsertWithWhereUniqueWithoutMapInput.schema';
import { MonsterCreateManyMapInputEnvelopeObjectSchema } from './MonsterCreateManyMapInputEnvelope.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema } from './MonsterUpdateWithWhereUniqueWithoutMapInput.schema';
import { MonsterUpdateManyWithWhereWithoutMapInputObjectSchema } from './MonsterUpdateManyWithWhereWithoutMapInput.schema';
import { MonsterScalarWhereInputObjectSchema } from './MonsterScalarWhereInput.schema'

export const MonsterUpdateManyWithoutMapNestedInputObjectSchema: z.ZodType<Prisma.MonsterUpdateManyWithoutMapNestedInput, Prisma.MonsterUpdateManyWithoutMapNestedInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateWithoutMapInputObjectSchema).array(), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema), z.lazy(() => MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MonsterCreateManyMapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema), z.lazy(() => MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MonsterUpdateManyWithWhereWithoutMapInputObjectSchema), z.lazy(() => MonsterUpdateManyWithWhereWithoutMapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MonsterUpdateManyWithoutMapNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateWithoutMapInputObjectSchema).array(), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema), z.lazy(() => MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MonsterCreateManyMapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema), z.lazy(() => MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MonsterUpdateManyWithWhereWithoutMapInputObjectSchema), z.lazy(() => MonsterUpdateManyWithWhereWithoutMapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MonsterScalarWhereInputObjectSchema), z.lazy(() => MonsterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
