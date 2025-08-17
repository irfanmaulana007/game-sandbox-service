import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateWithoutMonsterInput.schema';
import { MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateOrConnectWithoutMonsterInput.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './MonsterDetailsWhereUniqueInput.schema'

export const MonsterDetailsCreateNestedOneWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsCreateNestedOneWithoutMonsterInput, Prisma.MonsterDetailsCreateNestedOneWithoutMonsterInput> = z.object({
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MonsterDetailsCreateNestedOneWithoutMonsterInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema).optional()
}).strict();
