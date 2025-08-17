import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema';
import { MonsterUpdateWithoutDetailsInputObjectSchema } from './MonsterUpdateWithoutDetailsInput.schema';
import { MonsterUncheckedUpdateWithoutDetailsInputObjectSchema } from './MonsterUncheckedUpdateWithoutDetailsInput.schema'

export const MonsterUpdateToOneWithWhereWithoutDetailsInputObjectSchema: z.ZodType<Prisma.MonsterUpdateToOneWithWhereWithoutDetailsInput, Prisma.MonsterUpdateToOneWithWhereWithoutDetailsInput> = z.object({
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)])
}).strict();
export const MonsterUpdateToOneWithWhereWithoutDetailsInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutDetailsInputObjectSchema)])
}).strict();
