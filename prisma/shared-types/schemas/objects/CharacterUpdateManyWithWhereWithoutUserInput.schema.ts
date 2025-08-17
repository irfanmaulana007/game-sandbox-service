import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutUserInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutUserInput.schema'

export const CharacterUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutUserInput, Prisma.CharacterUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
