import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutEquipmentInputObjectSchema } from './CharacterCreateWithoutEquipmentInput.schema';
import { CharacterUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedCreateWithoutEquipmentInput.schema'

export const CharacterCreateOrConnectWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutEquipmentInput, Prisma.CharacterCreateOrConnectWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)])
}).strict();
