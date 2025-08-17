import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentCreateWithoutEquipmentInput.schema';
import { CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedCreateWithoutEquipmentInput.schema'

export const CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentCreateOrConnectWithoutEquipmentInput, Prisma.CharacterEquipmentCreateOrConnectWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterEquipmentCreateOrConnectWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterEquipmentCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
