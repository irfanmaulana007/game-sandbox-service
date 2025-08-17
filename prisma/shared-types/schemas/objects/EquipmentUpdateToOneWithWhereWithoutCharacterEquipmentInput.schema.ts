import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentWhereInputObjectSchema } from './EquipmentWhereInput.schema';
import { EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUpdateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedUpdateWithoutCharacterEquipmentInput.schema'

export const EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInputObjectSchema: z.ZodType<Prisma.EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInput, Prisma.EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInput> = z.object({
  where: z.lazy(() => EquipmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)])
}).strict();
export const EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => EquipmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)])
}).strict();
