import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUpdateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedUpdateWithoutCharacterInput.schema';
import { CharacterEquipmentCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateWithoutCharacterInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutCharacterInput.schema'

export const CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInput, Prisma.CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpsertWithWhereUniqueWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutCharacterInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutCharacterInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutCharacterInputObjectSchema)])
}).strict();
