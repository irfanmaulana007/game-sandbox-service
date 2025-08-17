import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryScalarWhereInputObjectSchema } from './CharacterInventoryScalarWhereInput.schema';
import { CharacterInventoryUpdateManyMutationInputObjectSchema } from './CharacterInventoryUpdateManyMutationInput.schema';
import { CharacterInventoryUncheckedUpdateManyWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedUpdateManyWithoutCharacterInput.schema'

export const CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateManyWithWhereWithoutCharacterInput, Prisma.CharacterInventoryUpdateManyWithWhereWithoutCharacterInput> = z.object({
  where: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
export const CharacterInventoryUpdateManyWithWhereWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
