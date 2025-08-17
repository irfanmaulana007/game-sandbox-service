import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateOrConnectWithoutEquipmentInput.schema';
import { CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema } from './CharacterEquipmentCreateManyEquipmentInputEnvelope.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema'

export const CharacterEquipmentCreateNestedManyWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateNestedManyWithoutEquipmentInput, Prisma.CharacterEquipmentCreateNestedManyWithoutEquipmentInput> = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterEquipmentCreateNestedManyWithoutEquipmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyEquipmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
