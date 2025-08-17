import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterDetailsWhereInputObjectSchema } from './MonsterDetailsWhereInput.schema';
import { MonsterDetailsUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUpdateWithoutMonsterInput.schema';
import { MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema } from './MonsterDetailsUncheckedUpdateWithoutMonsterInput.schema'

export const MonsterDetailsUpdateToOneWithWhereWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUpdateToOneWithWhereWithoutMonsterInput, Prisma.MonsterDetailsUpdateToOneWithWhereWithoutMonsterInput> = z.object({
  where: z.lazy(() => MonsterDetailsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)])
}).strict();
export const MonsterDetailsUpdateToOneWithWhereWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterDetailsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterDetailsUpdateWithoutMonsterInputObjectSchema), z.lazy(() => MonsterDetailsUncheckedUpdateWithoutMonsterInputObjectSchema)])
}).strict();
