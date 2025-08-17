import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUpdateWithoutEquipmentInputObjectSchema } from './CharacterUpdateWithoutEquipmentInput.schema';
import { CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedUpdateWithoutEquipmentInput.schema';
import { CharacterCreateWithoutEquipmentInputObjectSchema } from './CharacterCreateWithoutEquipmentInput.schema';
import { CharacterUncheckedCreateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedCreateWithoutEquipmentInput.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

export const CharacterUpsertWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithoutEquipmentInput, Prisma.CharacterUpsertWithoutEquipmentInput> = z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const CharacterUpsertWithoutEquipmentInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutEquipmentInputObjectSchema)]),
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
