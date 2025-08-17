import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutUserInputObjectSchema } from './CharacterUpdateWithoutUserInput.schema';
import { CharacterUncheckedUpdateWithoutUserInputObjectSchema } from './CharacterUncheckedUpdateWithoutUserInput.schema';
import { CharacterCreateWithoutUserInputObjectSchema } from './CharacterCreateWithoutUserInput.schema';
import { CharacterUncheckedCreateWithoutUserInputObjectSchema } from './CharacterUncheckedCreateWithoutUserInput.schema'

export const CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutUserInput, Prisma.CharacterUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
