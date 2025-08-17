import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentWhereUniqueInputObjectSchema } from './EquipmentWhereUniqueInput.schema';
import { EquipmentCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedCreateWithoutCharacterEquipmentInput.schema'

export const EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema: z.ZodType<Prisma.EquipmentCreateOrConnectWithoutCharacterEquipmentInput, Prisma.EquipmentCreateOrConnectWithoutCharacterEquipmentInput> = z.object({
  where: z.lazy(() => EquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)])
}).strict();
export const EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => EquipmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)])
}).strict();
