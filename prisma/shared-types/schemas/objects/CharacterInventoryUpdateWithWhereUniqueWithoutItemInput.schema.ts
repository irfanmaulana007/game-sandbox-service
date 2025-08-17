import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithoutItemInputObjectSchema } from './CharacterInventoryUpdateWithoutItemInput.schema';
import { CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedUpdateWithoutItemInput.schema'

export const CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateWithWhereUniqueWithoutItemInput, Prisma.CharacterInventoryUpdateWithWhereUniqueWithoutItemInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const CharacterInventoryUpdateWithWhereUniqueWithoutItemInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateWithoutItemInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
