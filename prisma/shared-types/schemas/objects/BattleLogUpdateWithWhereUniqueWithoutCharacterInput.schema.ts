import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema';
import { BattleLogUpdateWithoutCharacterInputObjectSchema } from './BattleLogUpdateWithoutCharacterInput.schema';
import { BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedUpdateWithoutCharacterInput.schema'

export const BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateWithWhereUniqueWithoutCharacterInput, Prisma.BattleLogUpdateWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
export const BattleLogUpdateWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
