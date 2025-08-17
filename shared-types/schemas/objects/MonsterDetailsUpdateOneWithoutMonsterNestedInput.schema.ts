import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedCreateWithoutMonsterInput.schema';
import { MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema } from './MonsterDetailsCreateOrConnectWithoutMonsterInput.schema';
import { MonsterDetailsUpsertWithoutMonsterInputObjectSchema } from './MonsterDetailsUpsertWithoutMonsterInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './MonsterDetailsWhereInput.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './MonsterDetailsWhereUniqueInput.schema';
import { MonsterDetailsUpdateToOneWithWhereWithoutMonsterInputObjectSchema } from './MonsterDetailsUpdateToOneWithWhereWithoutMonsterInput.schema';
import { MonsterDetailsUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUpdateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedUpdateWithoutMonsterInput.schema'

export const MonsterDetailsUpdateOneWithoutMonsterNestedInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUpdateOneWithoutMonsterNestedInput, Prisma.MonsterDetailsUpdateOneWithoutMonsterNestedInput> = z.object({
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterDetailsUpsertWithoutMonsterInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterDetailsUpdateToOneWithWhereWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)]).optional()
}).strict();
export const MonsterDetailsUpdateOneWithoutMonsterNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterDetailsCreateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterDetailsCreateOrConnectWithoutMonsterInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterDetailsUpsertWithoutMonsterInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MonsterDetailsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MonsterDetailsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterDetailsUpdateToOneWithWhereWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)]).optional()
}).strict();
