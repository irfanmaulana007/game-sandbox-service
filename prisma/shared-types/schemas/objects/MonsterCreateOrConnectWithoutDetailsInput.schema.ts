import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterCreateWithoutDetailsInputObjectSchema } from './MonsterCreateWithoutDetailsInput.schema';
import { MonsterUncheckedCreateWithoutDetailsInputObjectSchema } from './MonsterUncheckedCreateWithoutDetailsInput.schema'

export const MonsterCreateOrConnectWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterCreateOrConnectWithoutDetailsInput, Prisma.MonsterCreateOrConnectWithoutDetailsInput> = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)])
}).strict();
export const MonsterCreateOrConnectWithoutDetailsInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)])
}).strict();
