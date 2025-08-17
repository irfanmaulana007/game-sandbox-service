import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { CharacterUpdateWithoutEquipmentInputObjectSchema } from './CharacterUpdateWithoutEquipmentInput.schema';
import { CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema } from './CharacterUncheckedUpdateWithoutEquipmentInput.schema'

export const CharacterUpdateToOneWithWhereWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutEquipmentInput, Prisma.CharacterUpdateToOneWithWhereWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterUpdateToOneWithWhereWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacterUpdateWithoutEquipmentInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutEquipmentInputObjectSchema)])
}).strict();
