import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithoutCharacterInputObjectSchema } from './CharacterInventoryUpdateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedUpdateWithoutCharacterInput.schema'

export const CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput, Prisma.CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
