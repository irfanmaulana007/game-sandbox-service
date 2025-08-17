import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutDetailsInputObjectSchema } from './MonsterCreateWithoutDetailsInput.schema';
import { MonsterUncheckedCreateWithoutDetailsInputObjectSchema } from './MonsterUncheckedCreateWithoutDetailsInput.schema';
import { MonsterCreateOrConnectWithoutDetailsInputObjectSchema } from './MonsterCreateOrConnectWithoutDetailsInput.schema';
import { MonsterUpsertWithoutDetailsInputObjectSchema } from './MonsterUpsertWithoutDetailsInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterUpdateToOneWithWhereWithoutDetailsInputObjectSchema } from './MonsterUpdateToOneWithWhereWithoutDetailsInput.schema';
import { MonsterUpdateWithoutDetailsInputObjectSchema } from './MonsterUpdateWithoutDetailsInput.schema';
import { MonsterUncheckedUpdateWithoutDetailsInputObjectSchema } from './MonsterUncheckedUpdateWithoutDetailsInput.schema'

export const MonsterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema: z.ZodType<Prisma.MonsterUpdateOneRequiredWithoutDetailsNestedInput, Prisma.MonsterUpdateOneRequiredWithoutDetailsNestedInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterUpsertWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterUpdateToOneWithWhereWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)]).optional()
}).strict();
export const MonsterUpdateOneRequiredWithoutDetailsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterUpsertWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterUpdateToOneWithWhereWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)]).optional()
}).strict();
