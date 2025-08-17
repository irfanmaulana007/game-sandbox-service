import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithoutMonsterInputObjectSchema } from './BattleLogUpdateWithoutMonsterInput.schema';
import { BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedUpdateWithoutMonsterInput.schema'

export const BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateWithWhereUniqueWithoutMonsterInput, Prisma.BattleLogUpdateWithWhereUniqueWithoutMonsterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema)])
}).strict();
export const BattleLogUpdateWithWhereUniqueWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema)])
}).strict();
