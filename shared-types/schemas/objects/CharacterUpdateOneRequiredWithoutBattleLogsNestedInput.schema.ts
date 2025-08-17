import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBattleLogsInputObjectSchema } from './CharacterCreateWithoutBattleLogsInput.schema';
import { CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedCreateWithoutBattleLogsInput.schema';
import { CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema } from './CharacterCreateOrConnectWithoutBattleLogsInput.schema';
import { CharacterUpsertWithoutBattleLogsInputObjectSchema } from './CharacterUpsertWithoutBattleLogsInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema } from './CharacterUpdateToOneWithWhereWithoutBattleLogsInput.schema';
import { CharacterUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUpdateWithoutBattleLogsInput.schema';
import { CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedUpdateWithoutBattleLogsInput.schema'

export const CharacterUpdateOneRequiredWithoutBattleLogsNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutBattleLogsNestedInput, Prisma.CharacterUpdateOneRequiredWithoutBattleLogsNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]).optional()
}).strict();
export const CharacterUpdateOneRequiredWithoutBattleLogsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBattleLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutBattleLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutBattleLogsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)]).optional()
}).strict();
