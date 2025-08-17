import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterCreateWithoutBattleLogsInputObjectSchema } from './MonsterCreateWithoutBattleLogsInput.schema';
import { MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedCreateWithoutBattleLogsInput.schema';
import { MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema } from './MonsterCreateOrConnectWithoutBattleLogsInput.schema';
import { MonsterUpsertWithoutBattleLogsInputObjectSchema } from './MonsterUpsertWithoutBattleLogsInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './MonsterWhereUniqueInput.schema';
import { MonsterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema } from './MonsterUpdateToOneWithWhereWithoutBattleLogsInput.schema';
import { MonsterUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUpdateWithoutBattleLogsInput.schema';
import { MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedUpdateWithoutBattleLogsInput.schema'

export const MonsterUpdateOneRequiredWithoutBattleLogsNestedInputObjectSchema: z.ZodType<Prisma.MonsterUpdateOneRequiredWithoutBattleLogsNestedInput, Prisma.MonsterUpdateOneRequiredWithoutBattleLogsNestedInput> = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterUpsertWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]).optional()
}).strict();
export const MonsterUpdateOneRequiredWithoutBattleLogsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => MonsterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MonsterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => MonsterUpsertWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => MonsterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MonsterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]).optional()
}).strict();
