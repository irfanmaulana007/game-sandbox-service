import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUpdateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedUpdateWithoutEquipmentInput.schema';
import { CharacterEquipmentCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutEquipmentInput.schema'

export const CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInput, Prisma.CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpsertWithWhereUniqueWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterEquipmentUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateWithoutEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
