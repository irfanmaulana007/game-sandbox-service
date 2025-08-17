import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUpdateWithoutBattleLogsInput.schema';
import { MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedUpdateWithoutBattleLogsInput.schema';
import { MonsterCreateWithoutBattleLogsInputObjectSchema } from './MonsterCreateWithoutBattleLogsInput.schema';
import { MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedCreateWithoutBattleLogsInput.schema';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const MonsterUpsertWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.MonsterUpsertWithoutBattleLogsInput, Prisma.MonsterUpsertWithoutBattleLogsInput> = z.object({
  update: z.union([z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]),
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
export const MonsterUpsertWithoutBattleLogsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]),
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional()
}).strict();
