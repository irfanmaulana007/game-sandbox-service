import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedCreateWithoutCharacterInput.schema'

export const CharacterInventoryCreateOrConnectWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryCreateOrConnectWithoutCharacterInput, Prisma.CharacterInventoryCreateOrConnectWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterInventoryCreateOrConnectWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterInventoryCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
