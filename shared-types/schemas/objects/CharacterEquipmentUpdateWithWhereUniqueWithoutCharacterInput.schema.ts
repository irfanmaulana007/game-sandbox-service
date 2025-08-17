import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUpdateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedUpdateWithoutCharacterInput.schema'

export const CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInput, Prisma.CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpdateWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema)])
}).strict();
