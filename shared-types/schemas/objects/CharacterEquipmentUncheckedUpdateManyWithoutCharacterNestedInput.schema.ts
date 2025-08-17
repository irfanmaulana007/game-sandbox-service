import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutCharacterInput.schema';
import { CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateOrConnectWithoutCharacterInput.schema';
import { CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema } from './CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInput.schema';
import { CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema } from './CharacterEquipmentCreateManyCharacterInputEnvelope.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema } from './CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInput.schema';
import { CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema } from './CharacterEquipmentUpdateManyWithWhereWithoutCharacterInput.schema';
import { CharacterEquipmentScalarWhereInputObjectSchema } from './CharacterEquipmentScalarWhereInput.schema'

export const CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInput, Prisma.CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterEquipmentUncheckedUpdateManyWithoutCharacterNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
