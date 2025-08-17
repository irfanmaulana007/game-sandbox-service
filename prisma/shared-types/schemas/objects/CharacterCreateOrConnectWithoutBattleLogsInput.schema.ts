import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutBattleLogsInputObjectSchema } from './CharacterCreateWithoutBattleLogsInput.schema';
import { CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedCreateWithoutBattleLogsInput.schema'

export const CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutBattleLogsInput, Prisma.CharacterCreateOrConnectWithoutBattleLogsInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutBattleLogsInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)])
}).strict();
