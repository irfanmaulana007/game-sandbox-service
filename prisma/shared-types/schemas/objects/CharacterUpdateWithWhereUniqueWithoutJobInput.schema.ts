import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutJobInputObjectSchema } from './CharacterUpdateWithoutJobInput.schema';
import { CharacterUncheckedUpdateWithoutJobInputObjectSchema } from './CharacterUncheckedUpdateWithoutJobInput.schema'

export const CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutJobInput, Prisma.CharacterUpdateWithWhereUniqueWithoutJobInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutJobInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutJobInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutJobInputObjectSchema)])
}).strict();
