import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryUpdateWithoutCharacterInputObjectSchema } from './CharacterInventoryUpdateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedUpdateWithoutCharacterInput.schema';
import { CharacterInventoryCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutCharacterInput.schema'

export const CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput, Prisma.CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterInventoryUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
