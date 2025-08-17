import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogCreateWithoutCharacterInputObjectSchema } from './BattleLogCreateWithoutCharacterInput.schema';
import { BattleLogUncheckedCreateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedCreateWithoutCharacterInput.schema'

export const BattleLogCreateOrConnectWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogCreateOrConnectWithoutCharacterInput, Prisma.BattleLogCreateOrConnectWithoutCharacterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const BattleLogCreateOrConnectWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
