import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryCreateWithoutItemInputObjectSchema } from './CharacterInventoryCreateWithoutItemInput.schema';
import { CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutItemInput.schema';
import { CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema } from './CharacterInventoryCreateOrConnectWithoutItemInput.schema';
import { CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema } from './CharacterInventoryUpsertWithWhereUniqueWithoutItemInput.schema';
import { CharacterInventoryCreateManyItemInputEnvelopeObjectSchema } from './CharacterInventoryCreateManyItemInputEnvelope.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema } from './CharacterInventoryUpdateWithWhereUniqueWithoutItemInput.schema';
import { CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema } from './CharacterInventoryUpdateManyWithWhereWithoutItemInput.schema';
import { CharacterInventoryScalarWhereInputObjectSchema } from './CharacterInventoryScalarWhereInput.schema'

export const CharacterInventoryUncheckedUpdateManyWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUncheckedUpdateManyWithoutItemNestedInput, Prisma.CharacterInventoryUncheckedUpdateManyWithoutItemNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CharacterInventoryUncheckedUpdateManyWithoutItemNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema).array(), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterInventoryCreateManyItemInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema), z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
