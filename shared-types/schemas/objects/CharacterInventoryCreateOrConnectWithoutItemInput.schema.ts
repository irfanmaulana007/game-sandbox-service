import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryCreateWithoutItemInputObjectSchema } from './CharacterInventoryCreateWithoutItemInput.schema';
import { CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutItemInput.schema'

export const CharacterInventoryCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateOrConnectWithoutItemInput, Prisma.CharacterInventoryCreateOrConnectWithoutItemInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const CharacterInventoryCreateOrConnectWithoutItemInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
