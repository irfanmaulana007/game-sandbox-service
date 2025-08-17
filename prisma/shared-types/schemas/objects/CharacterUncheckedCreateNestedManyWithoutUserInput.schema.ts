import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutUserInputObjectSchema } from './CharacterCreateWithoutUserInput.schema';
import { CharacterUncheckedCreateWithoutUserInputObjectSchema } from './CharacterUncheckedCreateWithoutUserInput.schema';
import { CharacterCreateOrConnectWithoutUserInputObjectSchema } from './CharacterCreateOrConnectWithoutUserInput.schema';
import { CharacterCreateManyUserInputEnvelopeObjectSchema } from './CharacterCreateManyUserInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

export const CharacterUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutUserInput, Prisma.CharacterUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
