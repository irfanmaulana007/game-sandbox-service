import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutJobInputObjectSchema } from './CharacterCreateWithoutJobInput.schema';
import { CharacterUncheckedCreateWithoutJobInputObjectSchema } from './CharacterUncheckedCreateWithoutJobInput.schema'

export const CharacterCreateOrConnectWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutJobInput, Prisma.CharacterCreateOrConnectWithoutJobInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutJobInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
