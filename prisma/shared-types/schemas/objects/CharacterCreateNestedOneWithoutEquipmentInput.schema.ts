import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutEquipmentInputObjectSchema } from './CharacterCreateWithoutEquipmentInput.schema';
import { CharacterUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedCreateWithoutEquipmentInput.schema';
import { CharacterCreateOrConnectWithoutEquipmentInputObjectSchema } from './CharacterCreateOrConnectWithoutEquipmentInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

export const CharacterCreateNestedOneWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutEquipmentInput, Prisma.CharacterCreateNestedOneWithoutEquipmentInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
export const CharacterCreateNestedOneWithoutEquipmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutEquipmentInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
