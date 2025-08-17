import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutEquipmentInputObjectSchema } from './CharacterCreateWithoutEquipmentInput.schema';
import { CharacterUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedCreateWithoutEquipmentInput.schema';
import { CharacterCreateOrConnectWithoutEquipmentInputObjectSchema } from './CharacterCreateOrConnectWithoutEquipmentInput.schema';
import { CharacterUpsertWithoutEquipmentInputObjectSchema } from './CharacterUpsertWithoutEquipmentInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateToOneWithWhereWithoutEquipmentInputObjectSchema } from './CharacterUpdateToOneWithWhereWithoutEquipmentInput.schema';
import { CharacterUpdateWithoutEquipmentInputObjectSchema } from './CharacterUpdateWithoutEquipmentInput.schema';
import { CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedUpdateWithoutEquipmentInput.schema'

export const CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutEquipmentNestedInput, Prisma.CharacterUpdateOneRequiredWithoutEquipmentNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutEquipmentInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)]).optional()
}).strict();
export const CharacterUpdateOneRequiredWithoutEquipmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutEquipmentInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)]).optional()
}).strict();
