import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterCreateWithoutBattleLogsInputObjectSchema } from './MonsterCreateWithoutBattleLogsInput.schema';
import { MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedCreateWithoutBattleLogsInput.schema'

export const MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.MonsterCreateOrConnectWithoutBattleLogsInput, Prisma.MonsterCreateOrConnectWithoutBattleLogsInput> = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)])
}).strict();
export const MonsterCreateOrConnectWithoutBattleLogsInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)])
}).strict();
