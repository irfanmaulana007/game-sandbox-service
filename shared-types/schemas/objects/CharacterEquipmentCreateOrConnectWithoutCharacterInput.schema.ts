import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutCharacterInput.schema'

export const CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateOrConnectWithoutCharacterInput, Prisma.CharacterEquipmentCreateOrConnectWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterEquipmentCreateOrConnectWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
