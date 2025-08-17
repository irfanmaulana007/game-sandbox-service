import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { CharacterUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUpdateWithoutBattleLogsInput.schema';
import { CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema } from './CharacterUncheckedUpdateWithoutBattleLogsInput.schema'

export const CharacterUpdateToOneWithWhereWithoutBattleLogsInputObjectSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutBattleLogsInput, Prisma.CharacterUpdateToOneWithWhereWithoutBattleLogsInput> = z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)])
}).strict();
export const CharacterUpdateToOneWithWhereWithoutBattleLogsInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacterUpdateWithoutBattleLogsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBattleLogsInputObjectSchema)])
}).strict();
