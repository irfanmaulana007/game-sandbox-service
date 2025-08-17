import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentScalarWhereInputObjectSchema } from './CharacterEquipmentScalarWhereInput.schema';
import { CharacterEquipmentUpdateManyMutationInputObjectSchema } from './CharacterEquipmentUpdateManyMutationInput.schema';
import { CharacterEquipmentUncheckedUpdateManyWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedUpdateManyWithoutCharacterInput.schema'

export const CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentUpdateManyWithWhereWithoutCharacterInput, Prisma.CharacterEquipmentUpdateManyWithWhereWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterEquipmentUpdateManyWithWhereWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterEquipmentUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterEquipmentUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
