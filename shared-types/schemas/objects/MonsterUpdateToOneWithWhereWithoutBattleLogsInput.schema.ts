import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema';
import { MonsterUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUpdateWithoutBattleLogsInput.schema';
import { MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './MonsterUncheckedUpdateWithoutBattleLogsInput.schema'

export const MonsterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.MonsterUpdateToOneWithWhereWithoutBattleLogsInput, Prisma.MonsterUpdateToOneWithWhereWithoutBattleLogsInput> = z.object({
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)])
}).strict();
export const MonsterUpdateToOneWithWhereWithoutBattleLogsInputObjectZodSchema = z.object({
  where: z.lazy(() => MonsterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MonsterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => MonsterUncheckedUpdateWithoutBattleLogsInputObjectSchema)])
}).strict();
