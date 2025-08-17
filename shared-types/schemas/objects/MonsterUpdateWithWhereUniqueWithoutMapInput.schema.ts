import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterUpdateWithoutMapInputObjectSchema } from './MonsterUpdateWithoutMapInput.schema';
import { MonsterUncheckedUpdateWithoutMapInputObjectSchema } from './MonsterUncheckedUpdateWithoutMapInput.schema'

export const MonsterUpdateWithWhereUniqueWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterUpdateWithWhereUniqueWithoutMapInput, Prisma.MonsterUpdateWithWhereUniqueWithoutMapInput> = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MonsterUpdateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutMapInputObjectSchema)])
}).strict();
export const MonsterUpdateWithWhereUniqueWithoutMapInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MonsterUpdateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutMapInputObjectSchema)])
}).strict();
