import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutCharacterInput.schema';
import { CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateOrConnectWithoutCharacterInput.schema';
import { CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema } from './CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput.schema';
import { CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema } from './CharacterInventoryCreateManyCharacterInputEnvelope.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema } from './CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput.schema';
import { CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema } from './CharacterInventoryUpdateManyWithWhereWithoutCharacterInput.schema';
import { CharacterInventoryScalarWhereInputObjectSchema } from './CharacterInventoryScalarWhereInput.schema'

export const CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput, Prisma.CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
