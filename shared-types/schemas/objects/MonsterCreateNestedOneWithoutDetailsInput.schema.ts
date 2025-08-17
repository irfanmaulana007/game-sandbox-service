import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutDetailsInputObjectSchema } from './MonsterCreateWithoutDetailsInput.schema';
import { MonsterUncheckedCreateWithoutDetailsInputObjectSchema } from './MonsterUncheckedCreateWithoutDetailsInput.schema';
import { MonsterCreateOrConnectWithoutDetailsInputObjectSchema } from './MonsterCreateOrConnectWithoutDetailsInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema'

export const MonsterCreateNestedOneWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterCreateNestedOneWithoutDetailsInput, Prisma.MonsterCreateNestedOneWithoutDetailsInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional()
}).strict();
export const MonsterCreateNestedOneWithoutDetailsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional()
}).strict();
