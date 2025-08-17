import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutUserInputObjectSchema } from './CharacterCreateWithoutUserInput.schema';
import { CharacterUncheckedCreateWithoutUserInputObjectSchema } from './CharacterUncheckedCreateWithoutUserInput.schema';
import { CharacterCreateOrConnectWithoutUserInputObjectSchema } from './CharacterCreateOrConnectWithoutUserInput.schema';
import { CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CharacterUpsertWithWhereUniqueWithoutUserInput.schema';
import { CharacterCreateManyUserInputEnvelopeObjectSchema } from './CharacterCreateManyUserInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CharacterUpdateWithWhereUniqueWithoutUserInput.schema';
import { CharacterUpdateManyWithWhereWithoutUserInputObjectSchema } from './CharacterUpdateManyWithWhereWithoutUserInput.schema';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema'

export const CharacterUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyWithoutUserNestedInput, Prisma.CharacterUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CharacterUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CharacterUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CharacterUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional()
}).strict();
