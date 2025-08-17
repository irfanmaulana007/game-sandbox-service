import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutBattleLogsInputObjectSchema } from './MonsterCreateWithoutBattleLogsInput.schema';
import { MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedCreateWithoutBattleLogsInput.schema';
import { MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema } from './MonsterCreateOrConnectWithoutBattleLogsInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema'

export const MonsterCreateNestedOneWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.MonsterCreateNestedOneWithoutBattleLogsInput, Prisma.MonsterCreateNestedOneWithoutBattleLogsInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional()
}).strict();
export const MonsterCreateNestedOneWithoutBattleLogsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional()
}).strict();
