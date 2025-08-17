import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutJobInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutJobInput.schema'

export const CharacterUpdateManyWithWhereWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutJobInput, Prisma.CharacterUpdateManyWithWhereWithoutJobInput> = z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutJobInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutJobInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutJobInputObjectSchema)])
}).strict();
