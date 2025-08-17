import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutUserInputObjectSchema } from './CharacterCreateWithoutUserInput.schema';
import { CharacterUncheckedCreateWithoutUserInputObjectSchema } from './CharacterUncheckedCreateWithoutUserInput.schema'

export const CharacterCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutUserInput, Prisma.CharacterCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutUserInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
