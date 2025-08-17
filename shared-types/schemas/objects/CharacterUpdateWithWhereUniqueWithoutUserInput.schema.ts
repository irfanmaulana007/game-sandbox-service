import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutUserInputObjectSchema } from './CharacterUpdateWithoutUserInput.schema';
import { CharacterUncheckedUpdateWithoutUserInputObjectSchema } from './CharacterUncheckedUpdateWithoutUserInput.schema'

export const CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutUserInput, Prisma.CharacterUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
