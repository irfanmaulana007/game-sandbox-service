import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutJobInputObjectSchema } from './CharacterCreateWithoutJobInput.schema';
import { CharacterUncheckedCreateWithoutJobInputObjectSchema } from './CharacterUncheckedCreateWithoutJobInput.schema';
import { CharacterCreateOrConnectWithoutJobInputObjectSchema } from './CharacterCreateOrConnectWithoutJobInput.schema';
import { CharacterCreateManyJobInputEnvelopeObjectSchema } from './CharacterCreateManyJobInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

export const CharacterCreateNestedManyWithoutJobInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedManyWithoutJobInput, Prisma.CharacterCreateNestedManyWithoutJobInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateWithoutJobInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyJobInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterCreateNestedManyWithoutJobInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateWithoutJobInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyJobInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
