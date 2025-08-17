import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './MonsterDetailsWhereUniqueInput.schema';
import { MonsterDetailsCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateWithoutMonsterInput.schema'

export const MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsCreateOrConnectWithoutMonsterInput, Prisma.MonsterDetailsCreateOrConnectWithoutMonsterInput> = z.object({
  where: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
export const MonsterDetailsCreateOrConnectWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
