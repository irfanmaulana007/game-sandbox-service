import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogScalarWhereInputObjectSchema } from './BattleLogScalarWhereInput.schema';
import { BattleLogUpdateManyMutationInputObjectSchema } from './BattleLogUpdateManyMutationInput.schema';
import { BattleLogUncheckedUpdateManyWithoutMonsterInputObjectSchema } from './BattleLogUncheckedUpdateManyWithoutMonsterInput.schema'

export const BattleLogUpdateManyWithWhereWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateManyWithWhereWithoutMonsterInput, Prisma.BattleLogUpdateManyWithWhereWithoutMonsterInput> = z.object({
  where: z.lazy(() => BattleLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateManyMutationInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateManyWithoutMonsterInputObjectSchema)])
}).strict();
export const BattleLogUpdateManyWithWhereWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateManyMutationInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateManyWithoutMonsterInputObjectSchema)])
}).strict();
