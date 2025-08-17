import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateOrConnectWithoutEquipmentInput.schema';
import { CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInput.schema';
import { CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema } from './CharacterEquipmentCreateManyEquipmentInputEnvelope.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInput.schema';
import { CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInput.schema';
import { CharacterEquipmentScalarWhereInputObjectSchema } from './CharacterEquipmentScalarWhereInput.schema'

export const CharacterEquipmentUncheckedUpdateManyWithoutEquipmentNestedInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUncheckedUpdateManyWithoutEquipmentNestedInput, Prisma.CharacterEquipmentUncheckedUpdateManyWithoutEquipmentNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterEquipmentUncheckedUpdateManyWithoutEquipmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
