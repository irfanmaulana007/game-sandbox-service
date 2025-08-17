import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterScalarWhereInputObjectSchema } from './MonsterScalarWhereInput.schema';
import { MonsterUpdateManyMutationInputObjectSchema } from './MonsterUpdateManyMutationInput.schema';
import { MonsterUncheckedUpdateManyWithoutMapInputObjectSchema } from './MonsterUncheckedUpdateManyWithoutMapInput.schema'

export const MonsterUpdateManyWithWhereWithoutMapInputObjectSchema: z.ZodType<Prisma.MonsterUpdateManyWithWhereWithoutMapInput, Prisma.MonsterUpdateManyWithWhereWithoutMapInput> = z.object({
  where: z.lazy(() => MonsterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MonsterUpdateManyMutationInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateManyWithoutMapInputObjectSchema)])
}).strict();
export const MonsterUpdateManyWithWhereWithoutMapInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MonsterUpdateManyMutationInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateManyWithoutMapInputObjectSchema)])
}).strict();
