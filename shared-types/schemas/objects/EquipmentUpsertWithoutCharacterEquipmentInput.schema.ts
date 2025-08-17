import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUpdateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedUpdateWithoutCharacterEquipmentInput.schema';
import { EquipmentCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentWhereInputObjectSchema } from './EquipmentWhereInput.schema'

export const EquipmentUpsertWithoutCharacterEquipmentInputObjectSchema: z.ZodType<Prisma.EquipmentUpsertWithoutCharacterEquipmentInput, Prisma.EquipmentUpsertWithoutCharacterEquipmentInput> = z.object({
  update: z.union([z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]),
  where: z.lazy(() => EquipmentWhereInputObjectSchema).optional()
}).strict();
export const EquipmentUpsertWithoutCharacterEquipmentInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]),
  where: z.lazy(() => EquipmentWhereInputObjectSchema).optional()
}).strict();
