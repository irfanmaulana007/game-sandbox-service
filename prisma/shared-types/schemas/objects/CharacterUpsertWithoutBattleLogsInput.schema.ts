import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUpdateWithoutBattleLogsInput.schema';
import { CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedUpdateWithoutBattleLogsInput.schema';
import { CharacterCreateWithoutBattleLogsInputObjectSchema } from './CharacterCreateWithoutBattleLogsInput.schema';
import { CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedCreateWithoutBattleLogsInput.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

export const CharacterUpsertWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithoutBattleLogsInput, Prisma.CharacterUpsertWithoutBattleLogsInput> = z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterUpsertWithoutBattleLogsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
