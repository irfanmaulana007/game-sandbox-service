import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateWithoutItemInputObjectSchema } from './CharacterInventoryCreateWithoutItemInput.schema';
import { CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutItemInput.schema';
import { CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema } from './CharacterInventoryCreateOrConnectWithoutItemInput.schema';
import { CharacterInventoryCreateManyItemInputEnvelopeObjectSchema } from './CharacterInventoryCreateManyItemInputEnvelope.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema'

export const CharacterInventoryCreateNestedManyWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateNestedManyWithoutItemInput, Prisma.CharacterInventoryCreateNestedManyWithoutItemInput> = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterInventoryCreateNestedManyWithoutItemInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyItemInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
