import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBattleLogsInputObjectSchema } from './CharacterCreateWithoutBattleLogsInput.schema';
import { CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedCreateWithoutBattleLogsInput.schema';
import { CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema } from './CharacterCreateOrConnectWithoutBattleLogsInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

export const CharacterCreateNestedOneWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutBattleLogsInput, Prisma.CharacterCreateNestedOneWithoutBattleLogsInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
export const CharacterCreateNestedOneWithoutBattleLogsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
