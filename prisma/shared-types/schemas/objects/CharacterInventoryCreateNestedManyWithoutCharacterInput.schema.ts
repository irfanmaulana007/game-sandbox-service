import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutCharacterInput.schema';
import { CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateOrConnectWithoutCharacterInput.schema';
import { CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema } from './CharacterInventoryCreateManyCharacterInputEnvelope.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema'

export const CharacterInventoryCreateNestedManyWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateNestedManyWithoutCharacterInput, Prisma.CharacterInventoryCreateNestedManyWithoutCharacterInput> = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterInventoryCreateNestedManyWithoutCharacterInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
