import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterCreateWithoutMapInputObjectSchema } from './MonsterCreateWithoutMapInput.schema';
import { MonsterUncheckedCreateWithoutMapInputObjectSchema } from './MonsterUncheckedCreateWithoutMapInput.schema'

export const MonsterCreateOrConnectWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterCreateOrConnectWithoutMapInput, Prisma.MonsterCreateOrConnectWithoutMapInput> = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema)])
}).strict();
export const MonsterCreateOrConnectWithoutMapInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutMapInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutMapInputObjectSchema)])
}).strict();
