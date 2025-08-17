import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUpdateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedUpdateWithoutMonsterInput.schema';
import { MonsterDetailsCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateWithoutMonsterInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './MonsterDetailsWhereInput.schema'

export const MonsterDetailsUpsertWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUpsertWithoutMonsterInput, Prisma.MonsterDetailsUpsertWithoutMonsterInput> = z.object({
  update: z.union([z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]),
  where: z.lazy(() => MonsterDetailsWhereInputObjectSchema).optional()
}).strict();
export const MonsterDetailsUpsertWithoutMonsterInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]),
  where: z.lazy(() => MonsterDetailsWhereInputObjectSchema).optional()
}).strict();
