import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentScalarWhereInputObjectSchema } from './CharacterEquipmentScalarWhereInput.schema';
import { CharacterEquipmentUpdateManyMutationInputObjectSchema } from './CharacterEquipmentUpdateManyMutationInput.schema';
import { CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInputObjectSchema } from './CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInput.schema'

export const CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInput, Prisma.CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInput> = z.object({
  where: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpdateManyWithWhereWithoutEquipmentInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutEquipmentInputObjectSchema)])
}).strict();
