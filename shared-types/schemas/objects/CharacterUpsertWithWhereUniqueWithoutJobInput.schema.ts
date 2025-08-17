import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutJobInputObjectSchema } from './CharacterUpdateWithoutJobInput.schema';
import { CharacterUncheckedUpdateWithoutJobInputObjectSchema } from './CharacterUncheckedUpdateWithoutJobInput.schema';
import { CharacterCreateWithoutJobInputObjectSchema } from './CharacterCreateWithoutJobInput.schema';
import { CharacterUncheckedCreateWithoutJobInputObjectSchema } from './CharacterUncheckedCreateWithoutJobInput.schema'

export const CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutJobInput, Prisma.CharacterUpsertWithWhereUniqueWithoutJobInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutJobInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutJobInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutJobInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
