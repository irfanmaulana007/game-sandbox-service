import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterUpdateWithoutMapInputObjectSchema } from './MonsterUpdateWithoutMapInput.schema';
import { MonsterUncheckedUpdateWithoutMapInputObjectSchema } from './MonsterUncheckedUpdateWithoutMapInput.schema';
import { MonsterCreateWithoutMapInputObjectSchema } from './MonsterCreateWithoutMapInput.schema';
import { MonsterUncheckedCreateWithoutMapInputObjectSchema } from './MonsterUncheckedCreateWithoutMapInput.schema'

export const MonsterUpsertWithWhereUniqueWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterUpsertWithWhereUniqueWithoutMapInput, Prisma.MonsterUpsertWithWhereUniqueWithoutMapInput> = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MonsterUpdateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutMapInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema)])
}).strict();
export const MonsterUpsertWithWhereUniqueWithoutMapInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MonsterUpdateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutMapInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema)])
}).strict();
