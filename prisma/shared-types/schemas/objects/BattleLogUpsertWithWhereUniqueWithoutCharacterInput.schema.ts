import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithoutCharacterInputObjectSchema } from './BattleLogUpdateWithoutCharacterInput.schema';
import { BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedUpdateWithoutCharacterInput.schema';
import { BattleLogCreateWithoutCharacterInputObjectSchema } from './BattleLogCreateWithoutCharacterInput.schema';
import { BattleLogUncheckedCreateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedCreateWithoutCharacterInput.schema'

export const BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogUpsertWithWhereUniqueWithoutCharacterInput, Prisma.BattleLogUpsertWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BattleLogUpdateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const BattleLogUpsertWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BattleLogUpdateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
