import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutMapInputObjectSchema } from './MonsterCreateWithoutMapInput.schema';
import { MonsterUncheckedCreateWithoutMapInputObjectSchema } from './MonsterUncheckedCreateWithoutMapInput.schema';
import { MonsterCreateOrConnectWithoutMapInputObjectSchema } from './MonsterCreateOrConnectWithoutMapInput.schema';
import { MonsterCreateManyMapInputEnvelopeObjectSchema } from './MonsterCreateManyMapInputEnvelope.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema'

export const MonsterCreateNestedManyWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterCreateNestedManyWithoutMapInput, Prisma.MonsterCreateNestedManyWithoutMapInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateWithoutMapInputObjectSchema).array(), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MonsterCreateManyMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MonsterCreateNestedManyWithoutMapInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateWithoutMapInputObjectSchema).array(), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema), z.lazy(() => MonsterCreateOrConnectWithoutMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MonsterCreateManyMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MonsterWhereUniqueInputObjectSchema), z.lazy(() => MonsterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
