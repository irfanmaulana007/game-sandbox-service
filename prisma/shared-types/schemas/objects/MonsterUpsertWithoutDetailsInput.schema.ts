import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterUpdateWithoutDetailsInputObjectSchema } from './MonsterUpdateWithoutDetailsInput.schema';
import { MonsterUncheckedUpdateWithoutDetailsInputObjectSchema } from './MonsterUncheckedUpdateWithoutDetailsInput.schema';
import { MonsterCreateWithoutDetailsInputObjectSchema } from './MonsterCreateWithoutDetailsInput.schema';
import { MonsterUncheckedCreateWithoutDetailsInputObjectSchema } from './MonsterUncheckedCreateWithoutDetailsInput.schema';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const MonsterUpsertWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterUpsertWithoutDetailsInput, Prisma.MonsterUpsertWithoutDetailsInput> = z.object({
  update: z.union([z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]),
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
export const MonsterUpsertWithoutDetailsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]),
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
