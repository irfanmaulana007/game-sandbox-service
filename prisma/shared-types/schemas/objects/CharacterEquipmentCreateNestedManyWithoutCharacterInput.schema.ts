import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutCharacterInput.schema';
import { CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateOrConnectWithoutCharacterInput.schema';
import { CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema } from './CharacterEquipmentCreateManyCharacterInputEnvelope.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema'

export const CharacterEquipmentCreateNestedManyWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateNestedManyWithoutCharacterInput, Prisma.CharacterEquipmentCreateNestedManyWithoutCharacterInput> = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterEquipmentCreateNestedManyWithoutCharacterInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterEquipmentCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema), z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
