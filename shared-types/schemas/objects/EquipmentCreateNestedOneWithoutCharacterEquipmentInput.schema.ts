import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateOrConnectWithoutCharacterEquipmentInput.schema';
import { EquipmentWhereUniqueInputObjectSchema } from './EquipmentWhereUniqueInput.schema'

export const EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectSchema: z.ZodType<Prisma.EquipmentCreateNestedOneWithoutCharacterEquipmentInput, Prisma.EquipmentCreateNestedOneWithoutCharacterEquipmentInput> = z.object({
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => EquipmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const EquipmentCreateNestedOneWithoutCharacterEquipmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => EquipmentWhereUniqueInputObjectSchema).optional()
}).strict();
