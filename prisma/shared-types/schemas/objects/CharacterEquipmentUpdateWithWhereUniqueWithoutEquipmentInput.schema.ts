import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUpdateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedUpdateWithoutEquipmentInput.schema'

export const CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInput, Prisma.CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpdateWithWhereUniqueWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema)])
}).strict();
