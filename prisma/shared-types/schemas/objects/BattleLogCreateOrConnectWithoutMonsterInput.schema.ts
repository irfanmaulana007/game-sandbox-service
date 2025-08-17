import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogCreateWithoutMonsterInputObjectSchema } from './BattleLogCreateWithoutMonsterInput.schema';
import { BattleLogUncheckedCreateWithoutMonsterInputObjectSchema } from './BattleLogUncheckedCreateWithoutMonsterInput.schema'

export const BattleLogCreateOrConnectWithoutMonsterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateOrConnectWithoutMonsterInput, Prisma.BattleLogCreateOrConnectWithoutMonsterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
export const BattleLogCreateOrConnectWithoutMonsterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BattleLogCreateWithoutMonsterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutMonsterInputObjectSchema)])
}).strict();
