import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithoutItemInputObjectSchema } from './CharacterInventoryUpdateWithoutItemInput.schema';
import { CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedUpdateWithoutItemInput.schema';
import { CharacterInventoryCreateWithoutItemInputObjectSchema } from './CharacterInventoryCreateWithoutItemInput.schema';
import { CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutItemInput.schema'

export const CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpsertWithWhereUniqueWithoutItemInput, Prisma.CharacterInventoryUpsertWithWhereUniqueWithoutItemInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const CharacterInventoryUpsertWithWhereUniqueWithoutItemInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
