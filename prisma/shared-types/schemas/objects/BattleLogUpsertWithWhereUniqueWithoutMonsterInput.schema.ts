import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithoutMonsterInputObjectSchema } from './BattleLogUpdateWithoutMonsterInput.schema';
import { BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedUpdateWithoutMonsterInput.schema';
import { BattleLogCreateWithoutMonsterInputObjectSchema } from './BattleLogCreateWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateWithoutMonsterInput.schema'

export const BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogUpsertWithWhereUniqueWithoutMonsterInput, Prisma.BattleLogUpsertWithWhereUniqueWithoutMonsterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BattleLogUpdateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema)]),
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
export const BattleLogUpsertWithWhereUniqueWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BattleLogUpdateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutMonsterInputObjectSchema)]),
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
