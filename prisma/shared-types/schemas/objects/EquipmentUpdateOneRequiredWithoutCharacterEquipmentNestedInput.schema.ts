import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquipmentCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedCreateWithoutCharacterEquipmentInput.schema';
import { EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema } from './EquipmentCreateOrConnectWithoutCharacterEquipmentInput.schema';
import { EquipmentUpsertWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUpsertWithoutCharacterEquipmentInput.schema';
import { EquipmentWhereUniqueInputObjectSchema } from './EquipmentWhereUniqueInput.schema';
import { EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInput.schema';
import { EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUpdateWithoutCharacterEquipmentInput.schema';
import { EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema } from './EquipmentUncheckedUpdateWithoutCharacterEquipmentInput.schema'

export const EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectSchema: z.ZodType<Prisma.EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInput, Prisma.EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInput> = z.object({
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema).optional(),
  upsert: z.lazy(() => EquipmentUpsertWithoutCharacterEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => EquipmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)]).optional()
}).strict();
export const EquipmentUpdateOneRequiredWithoutCharacterEquipmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => EquipmentCreateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedCreateWithoutCharacterEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EquipmentCreateOrConnectWithoutCharacterEquipmentInputObjectSchema).optional(),
  upsert: z.lazy(() => EquipmentUpsertWithoutCharacterEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => EquipmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EquipmentUpdateToOneWithWhereWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUpdateWithoutCharacterEquipmentInputObjectSchema), z.lazy(() => EquipmentUncheckedUpdateWithoutCharacterEquipmentInputObjectSchema)]).optional()
}).strict();
