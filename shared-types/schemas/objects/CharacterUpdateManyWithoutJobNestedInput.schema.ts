import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutJobInputObjectSchema } from './CharacterCreateWithoutJobInput.schema';
import { CharacterUncheckedCreateWithoutJobInputObjectSchema } from './CharacterUncheckedCreateWithoutJobInput.schema';
import { CharacterCreateOrConnectWithoutJobInputObjectSchema } from './CharacterCreateOrConnectWithoutJobInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutJobInput.schema';
import { CharacterCreateManyJobInputEnvelopeObjectSchema } from './CharacterCreateManyJobInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutJobInput.schema';
import { CharacterUpdateManyWithWhereWithoutJobInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutJobInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

export const CharacterUpdateManyWithoutJobNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithoutJobNestedInput, Prisma.CharacterUpdateManyWithoutJobNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateWithoutJobInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyJobInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutJobInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutJobInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUpdateManyWithoutJobNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateWithoutJobInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyJobInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutJobInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutJobInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
